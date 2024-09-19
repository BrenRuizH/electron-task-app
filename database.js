const db = require('electron-db');
const { ipcMain } = require("electron");
const path = require('path');
const { event } = require('jquery');

//Esto guardara la base de datos en el mismo directorio que el de la aplicación
const location = path.join(__dirname, '');
console.log(location);

ipcMain.on('item-save', (event, arg) => {
    if(arg.trim() != "") {
        this.item_save(arg.trim());
    }
});

// Directio que se crea por defecto C:\Usuarios\brenr\AppData\Roaming\taskapp
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