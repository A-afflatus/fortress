export * from './countSlice';
import CountSlice from './countSlice';
import { COUNTER } from '@/redux/constant';

const reducers = {
    [COUNTER]: CountSlice,
}

export default reducers