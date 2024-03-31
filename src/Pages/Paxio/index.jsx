import React from 'react';

import bg from './../../img/background.png';

import ButtonsPaxio from './ButtonsPaxio';
import ButtonPaxioGerador from './ButtonPaxioGerador';
import UnitValueContent from './UnitValueContent';

function Paxio({handleClickUnitButton, handleClickButtonGerador, UnitValue}){

    return (
        <>
        <div className="overflow-scroll flex flex-col flex-nowrap items-center justify-start gap-[20px] w-full h-full p-[20px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>

            <h1 className='w-full font-Sora font-[900] text-white text-[3rem] text-center'>Paxio</h1>

            <p className='font-Sora font-[600] text-[1rem] text-neutral-950 text-center'>Seja bem vindo e esperamos que curta e que sirva para seus projetos, Crie senha aleatorias e coloque em seus projetos.</p>

            <ButtonsPaxio handleClickUnitButton={handleClickUnitButton}/>

            <ButtonPaxioGerador handleClickButtonGerador={handleClickButtonGerador}/>

            {UnitValue !== undefined ? <UnitValueContent UnitValue={UnitValue}/> : ''}

        </div>
        </>
    )
}

export default Paxio;