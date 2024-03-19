import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Welcome from '@/pages/Welcome.tsx';
import App from '@/App.tsx';
import { HOME, WELCOME } from './constant';
import RouterConfig from './modules';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={HOME} element={<App />}>
            <Route path={WELCOME} element={<Welcome />} />
            {RouterConfig}
            {/* 兜底跳转 */}
            <Route path={HOME} element={<Navigate to={WELCOME} />} />
        </Route>
    )
);


export default router;