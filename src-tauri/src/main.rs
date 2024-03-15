// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod menu;
mod setup;
mod tray_menu;
mod web_invoke;

use menu::{handler as app_menu_handler, menu as app_menu};
use setup::setup as app_setup;
use tray_menu::base::{handler as tray_handler, menu as tray_menu};
use web_invoke::greet;


fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        //启动前执行的闭包
        .setup(|app: &mut tauri::App| app_setup(app))
        //系统托盘
        .system_tray(tray_menu())
        .on_system_tray_event(tray_handler)
        //菜单
        .menu(app_menu(&context))
        .on_menu_event(app_menu_handler)
        //渲染进程函数注册
        .invoke_handler(tauri::generate_handler![greet])
        .run(context)
        .expect("error while running tauri application");
}
