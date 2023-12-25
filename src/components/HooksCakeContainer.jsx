import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCake, buyCake } from '../redux';

const HooksCakeContainer = () => {
    const num_cake= useSelector(state=>
        state.numOfCakes
        )
        const dispatch = useDispatch()
    return (
        <div className='flex flex-col py-32 align-middle justify-center items-center max-w-[700] mt-10 bg-slate-600 text-white'>
                       <h3 className='my-4'> Using useSelector Hook: </h3>
            <h4 className='my-4'>Number Of Cake: {num_cake} </h4>
            <button onClick={()=>dispatch(buyCake())} className='p-4 rounded-md bg-slate-500 text-white mb-2'>Buy Cake</button>
            <button onClick={()=>dispatch(addCake())} className='p-4 rounded-md bg-slate-500 text-white'>Add Cake</button>
        </div>
    );
};

export default HooksCakeContainer;