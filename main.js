const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
	const win = new BrowserWindow({
		// width: 1100,
		// height: 750,
		minWidth: 800,
		minHeight: 500,
		resizable: true,
		autoHideMenuBar: true,
		icon: path.join(__dirname, "assets", "icon.png"),
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});

	Menu.setApplicationMenu(null);

	const isDev = !app.isPackaged;

	win.loadURL(
		isDev
			? "http://localhost:5173"
			: `file://${path.join(__dirname, "frontend/dist/index.html")}`,
	);

	if (isDev) {
		win.webContents.openDevTools();
	}
}

app.whenReady().then(() => {
	createWindow();
	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
