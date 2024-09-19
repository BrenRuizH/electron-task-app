const db = require('electron-db');
const { app, BrowserWindow } = require("electron");

// C:\Usuarios\brenr\AppData\Roaming\taskapp
module.exports.create_db = function () {
    db.createTable('items', (succ, msg) => {
        // succ - boolean, avisa si la llamada es exitosa
        console.log("Success: " + succ);
        console.log("Message: " + msg);
    });
}

module.exports.item_save = function(name) {
    let obj = new Object();
    obj.id = new Date().getTime();
    obj.name = name;

    db.insertTableContent('items', obj, (succ, msg) => {
        console.log("Success: " + succ);
        console.log("Message: " + msg);
    })
}