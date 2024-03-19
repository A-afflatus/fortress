import { Route } from 'react-router-dom';
import { APPLICATION } from '@/routers/constant';
import Application from '@/pages/application_program';

export const ApplicationProgramRouters = 
    // react 中集合必须有key属性
    <Route key={APPLICATION} path={APPLICATION} element={<Application />} />

