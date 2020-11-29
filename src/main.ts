const { join } = require('path')
const { app, BrowserWindow } = require('electron')

const { NODE_ENV } = process.env
const indexFile = join(__dirname, 'static', 'index.html')

function createWindow () {
    const win = new BrowserWindow({
        width: 480,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    if (NODE_ENV === 'development') win.loadURL('http://localhost:3000')
    else win.loadFile(indexFile)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
