import { app, BrowserWindow } from "electron";

export const mainMenuTemplate = {
  label: "Main Menu",
  submenu: [
    {
      label: "Quit",
      accelerator: "CmdOrCtrl+Q",
      click: () => {
        app.quit();
      }
    },
  ]
};
