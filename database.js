const db = require('electron-db');
const { app, BrowserWindow } = require("electron");
const path = require('path');

//Esto guardara la base de datos en el mismo directorio que el de la aplicación
const location = path.join(__dirname, '');
console.log(location);

// C:\Usuarios\brenr\AppData\Roaming\taskapp
module.exports.create_db = function () {
    db.createTable('items', location, (succ, msg) => {
        // succ - boolean, avisa si la llamada es exitosa
        console.log("Success: " + succ);
        console.log("Message: " + msg);
    });
}

module.exports.item_save = function(name) {
    let obj = new Object();
    obj.id = new Date().getTime();
    obj.name = name;

    db.insertTableContent('items', location, obj, (succ, msg) => {
        console.log("Success: " + succ);
        console.log("Message: " + msg);
    })
}