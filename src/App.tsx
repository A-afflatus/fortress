import { Link, Outlet } from "react-router-dom";
import { WELCOME, APPLICATION } from '@/routers/constant';
import {version} from '../package.json';

function App() {

  return (
    <>
      <h1>当前版本{version}</h1>
      <Link to={WELCOME}>去欢迎页</Link>&nbsp;&nbsp;
      <Link to={APPLICATION}>去应用程序管理页</Link>
      <Outlet />
    </>
  )
}

export default App
