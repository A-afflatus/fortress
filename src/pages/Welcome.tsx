
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { increment, selectCount } from '../redux/modules/countSlice'


export default function Welcome() {
    //获取redux中的count
    const count = useAppSelector(selectCount)
    //获取redux中的dispatch
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(increment())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //调用redux中的increment方法
    return (
        <h1>{count}</h1>
    )
}