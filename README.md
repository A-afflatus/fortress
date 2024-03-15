# Tauri + React + Typescript + TailwindCSS + Vite + Shadcn/ui + Bun + WebAssembly + Rust + GitHub Actions + GitHub Pages + AutoUpdater + Windows + MacOS + Linux

模版项目

```bash
# 1.使用WebAssembly安装必要依赖
# cargo install rsw
# bun rsw new {{@mywasm/foo}}
# rsw.toml > [[crates]] 中新增 {{@mywasm/foo}} 可以加上link=true
# 开发环境运行的时候需要执行yarn rsw watch 以启动wasm的自动编译更新

# 2.安装tauri、bun (看官网)

# 3.修改配置
# src-tauri/tauri.conf.json / tauri / bundle / identifier
# src-tauri/tauri.conf.json / tauri / updater / pubkey 和 endpoints
# github仓库的setting中添加secrets: TAURI_PRIVATE_KEY 为你的私钥

# 4.创建gh-pages 页面 为此仓库添加GitHub Pages

```
