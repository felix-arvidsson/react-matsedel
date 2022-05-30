import React from 'react';

const Receptcard = ({foodNamn, Gram}) => {
    return (
        <>
        <p className='flex justify-center text-black-500/60'>{foodNamn}, {Gram} g</p>
        </>
        )
}
        
export default Receptcard;