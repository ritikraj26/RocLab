console.log('main process working');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const Menu = electron.Menu;

let win;

function createWindow() {
    win = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', function(){
    createWindow();
    const template = [
        {
            label: 'File',
            submenu: [
                {
                    label:'New'
                },
                {
                    label:'Open'
                },
                {
                    label:'Close'
                },
                {
                    type:'separator'
                },
                {
                    label:'Save'
                },
                {
                    label:'Save As..'
                },
                {
                    type:'separator'
                },
                {
                    label:'Export'
                },
                {
                    type:'separator'
                },
                {
                    label:'Page Setup...'
                },
                {
                    label:'Print Preview'
                },
                {
                    label:'Print'
                },
                {
                    type:'separator'
                },
                {
                    label:'TunnelProject.rlb'
                },
                {
                    type:'separator'
                },
                {
                    label:'Exit'
                },
            ]
        },
        {
            label: 'Edit',
            submenu: [
                {
                    label:'Copy'
                },
                {
                    label:'Copy Data'
                },
            ]
        },
        {
            label: 'View',
            submenu: [
                {
                    label:'DsiplayOptions...'
                },
                {
                    label:'Grayscale'
                },
                {
                    type:'separator'
                },
                {
                    label:'Zoom Extents'
                },
                {
                    label:'Zoom Surface'
                },
                {
                    label:'Zoom In'
                },
                {
                    label:'Zoom Out'
                },
                {
                    label:'Lock Axes'
                },
                {
                    type:'separator'
                },
                {
                    label:'Side Bar'
                },
            ]
        },
        {
            label: 'Analysis',
            submenu: [
                {
                    label:'Project Settings...'
                },
                {
                    label:'Use Lab Data...'
                },
                {
                    label:'Compute'
                },
                {
                    type:'separator'
                },
                {
                    label:'Principal Stress Plot'
                },
                {
                    label:'Normal vs Shear Stress'
                },
                {
                    label:'Plot Both'
                },
                {
                    type:'separator'
                },
                {
                    label:'Mohr-Coulomb Envelope'
                },
                {
                    type:'separator'
                },
                {
                    label:'Stress Sampler'
                },
                {
                    label:'Instantenous MC Sampler'
                },
            ]
        },
        {
            label: 'Window',
            submenu: [
                {
                    label:'New Window'
                },
                {
                    type:'separator'
                },
                {
                    label:'Cascde'
                },
                {
                    label:'Tile Horizontally'
                },
                {
                    label:'Tile Vertically'
                },
                {
                    type:'separator'
                },
                {
                    label:'RocLab1'
                },
            ]
        },
        {
            label: 'Help',
            submenu: [
                {
                    label:'RocLab User Guide'
                },
                {
                    label:'Hoek-Brown Criterion 2002'
                },
                {
                    label:'Hoek-Diederichs Modulus Method 2006'
                },
                {
                    label:'Hoek-Brown History 2006'
                },
                {
                    type:'separator'
                },
                {
                    label:'Product Updates'
                },
                {
                    type:'separator'
                },
                {
                    label:'About RocLab...'
                },
            ]
        },
    ]

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
});