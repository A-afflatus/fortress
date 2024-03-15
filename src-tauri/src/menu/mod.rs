use tauri::{
    utils::assets::EmbeddedAssets, AboutMetadata, Context, CustomMenuItem, Menu, MenuItem, Submenu,
    WindowMenuEvent,
};
/**
 * 菜单定义
 */
pub fn menu(context: &Context<EmbeddedAssets>) -> Menu {
    let name = &context.package_info().name;
    let mut menu = Menu::new();
    #[cfg(target_os = "macos")]
    {
        menu = menu.add_submenu(Submenu::new(
            name,
            Menu::new()
                .add_native_item(MenuItem::About(name.to_string(), AboutMetadata::default()))
                .add_native_item(MenuItem::Separator)
                .add_native_item(MenuItem::Hide)
                .add_native_item(MenuItem::HideOthers)
                .add_native_item(MenuItem::ShowAll)
                .add_native_item(MenuItem::Separator)
                .add_native_item(MenuItem::Quit),
        ));
    }

    let mut file_menu = Menu::new();
    file_menu = file_menu.add_item(CustomMenuItem::new("app-open-file", "打开文件（测试）"));
    menu = menu.add_submenu(Submenu::new("文件", file_menu));
    #[cfg(target_os = "macos")]
    {
        menu = menu.add_submenu(Submenu::new(
            "查看",
            Menu::new().add_native_item(MenuItem::EnterFullScreen),
        ));
    }

    let mut window_menu = Menu::new();
    window_menu = window_menu.add_native_item(MenuItem::Minimize);
    #[cfg(target_os = "macos")]
    {
        window_menu = window_menu.add_native_item(MenuItem::Zoom);
        window_menu = window_menu.add_native_item(MenuItem::Separator);
    }
    window_menu = window_menu.add_native_item(MenuItem::CloseWindow);
    menu = menu.add_submenu(Submenu::new("窗口", window_menu));

    menu = menu.add_submenu(Submenu::new(
        "帮助",
        Menu::new().add_item(CustomMenuItem::new("app-about", "关于")),
    ));
    menu
}
/**
 * 菜单事件处理
 */
pub fn handler(event: WindowMenuEvent) {
    // 匹配菜单 id
    match event.menu_item_id() {
        "app-about" => {
            println!("点击了关于菜单项");
        }
        _ => {
            println!("点击了其他的菜单项, id: {}", event.menu_item_id());
        }
    }
}
