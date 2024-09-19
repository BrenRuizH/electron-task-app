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