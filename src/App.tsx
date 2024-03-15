import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import {version} from '../package.json';
import init, { greet as wasmGreet }  from '@mywasm/foo'

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    // ✅ 初始化，加载 wasm 文件
    init();
  }, [])

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to fortress!</h1>
      <h2>{version}</h2>
      <button onClick={()=>wasmGreet()}>Test wasm</button>
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
