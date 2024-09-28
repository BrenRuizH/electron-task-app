const { app, BrowserWindow } = require('electron');
const mydb = require('./database');

function createWindow() {
    let win = new BrowserWindow(
        {
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        }
    )

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

//mydb.create_db();
//mydb.item_save("Nombre");
mydb.item_all();