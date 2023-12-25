import React from 'react';
import { buyCake } from '../redux/index.js';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
    return (
        <div className='flex flex-col py-32 align-middle justify-center items-center max-w-[700] bg-slate-600 text-white'>
            <h3 className='my-4'> Using Map-State & Map-DisPatch: </h3>
            <h4 className='my-4'>Number Of Cake: {props.numOfCakes} </h4>
            <button onClick={props.buyCake} className='p-4 rounded-md bg-slate-500 text-white'>Buy Cake</button>
        </div>
    );
};
const mapStateToProps = state =>{
    return({
        numOfCakes: state.numOfCakes,
    });
}
const mapDispatchToProps = dispatch =>{
    return ({
        buyCake : () => dispatch(buyCake()),
    })
}
export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);