"use strict";
var join = require('path').join;
var _a = require('electron'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var NODE_ENV = process.env.NODE_ENV;
var indexFile = join(__dirname, 'static', 'index.html');
function createWindow() {
    var win = new BrowserWindow({
        width: 480,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    console.log('ENV: ', NODE_ENV);
    if (NODE_ENV === 'development')
        win.loadURL('http://localhost:3000');
    else
        win.loadFile(indexFile);
}
app.whenReady().then(createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
