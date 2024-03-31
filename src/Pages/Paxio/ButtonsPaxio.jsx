import React from 'react';
import ButtonPaxio from './ButtonPaxio';

function ButtonsPaxio({handleClickUnitButton}){

    return (
        <>
        <div className='w-full flex flex-row flex-nowrap items-center justify-center gap-[20px]'>
            <ButtonPaxio Text={4} handleClickUnitButton={handleClickUnitButton}/>

            <ButtonPaxio Text={5} handleClickUnitButton={handleClickUnitButton}/>

            <ButtonPaxio Text={6} handleClickUnitButton={handleClickUnitButton}/>

            <ButtonPaxio Text={7} handleClickUnitButton={handleClickUnitButton}/>

            <ButtonPaxio Text={8} handleClickUnitButton={handleClickUnitButton}/>
        </div>
        </>
    )
}

export default ButtonsPaxio;