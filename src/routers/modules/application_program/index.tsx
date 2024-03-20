import { Route } from 'react-router-dom';
import { APPLICATION } from '@/routers/constant';
import Application from '@/pages/application_program';

export const ApplicationProgramRouters = 
    <Route key={APPLICATION} path={APPLICATION} element={<Application />} />

