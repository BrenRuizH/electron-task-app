const { app, BrowserWindow, ipcMain } = require('electron');
const mydb = require('./database');
const { event } = require('jquery');

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
//mydb.item_save("Apellido");
//mydb.item_get(1727488090538);

app.on('ready', () => {
    ipcMain.on('item-send', (event, data) => {
        mydb.item_all();
    });
});
