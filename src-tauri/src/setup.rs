use tauri::Manager;
pub fn setup(app: &mut tauri::App)->Result<(),Box<(dyn std::error::Error + 'static)>> {
    //todo 这有点问题啊，打包后的程序没有显示跳转页
    let splashscreen_window = app.get_window("splashscreen").unwrap();
    let main_window = app.get_window("main").unwrap();
    splashscreen_window.show().unwrap();
    tauri::async_runtime::spawn(async move {
        println!("应用初始化中...");
        //模拟初始化过程
        std::thread::sleep(std::time::Duration::from_secs(3));
        println!("应用初始化完毕.");
        //关闭加载页面，显示主页面
        splashscreen_window.close().unwrap();
        main_window.show().unwrap();
    });
    Ok(())
}
