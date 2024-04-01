import React from 'react';

import bg from './../../img/background.png';

import ButtonsPaxio from './ButtonsPaxio';
import ButtonPaxioGerador from './ButtonPaxioGerador';
import UnitValueContent from './UnitValueContent';

import { FaRegCopy } from "react-icons/fa6";

function Paxio({handleClickUnitButton, handleClickButtonGerador, UnitValue}){

    return (
        <>
        <div className="overflow-scroll flex flex-col flex-nowrap items-center justify-start gap-[10px] sm:gap-[50px] w-full h-full p-[20px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>

            <h1 className='w-full font-Sora font-[900] text-white text-[3rem] sm:text-[6rem] text-center'>Paxio</h1>

            <p className='font-Sora font-[600] text-[1rem] sm:text-[2rem] text-neutral-950 text-center'>Seja bem vindo e esperamos que curta e que sirva para seus projetos, Crie senha aleatorias e coloque em seus projetos.</p>

            <ButtonsPaxio handleClickUnitButton={handleClickUnitButton}/>

            <ButtonPaxioGerador handleClickButtonGerador={handleClickButtonGerador}/>

            {UnitValue !== undefined ? <UnitValueContent UnitValue={UnitValue}/> : ''}

            <p className='font-Sora font-[600] text-[1rem] sm:text-[2rem] text-neutral-950 text-center'>Caso for instalar via npm ultilize esse codigo.</p>

            <div className='transition .3s flex flex-row flex-nowrap items-center justify-between w-full min-h-[40px] sm:min-h-[80px] px-[20px] sm:px-[80px] bg-white/10 border-[2px] border-white/5 rounded-[100px] backdrop-blur-sm hover:backdrop-blur-md'>

                <h1 className='font-Sora font-[600] text-white text-[.75rem] sm:text-[1.5rem]'>npm i paxiocode</h1>

                <button type="submit" className='sm:scale-[2] flex flex-row flex-nowrap items-center justify-center gap-[5px] px-[24px] py-[6px] bg-sky-600/50 rounded-[20px]'><span className='font-Sora font-[600] text-white text-[.75rem]'>Copy</span><FaRegCopy className='text-sky-500 text-[.75rem]'/></button>

            </div>

            <p className='font-Sora font-[600] text-[1rem] sm:text-[2rem] text-neutral-950 text-center'>Caso for instalar via cdn ultilize esse codigo.</p>

            <div className='transition .3s flex flex-row flex-nowrap items-center justify-between w-full min-h-[40px] sm:min-h-[80px] px-[20px] sm:px-[80px] bg-white/10 border-[2px] border-white/5 rounded-[100px] backdrop-blur-sm hover:backdrop-blur-md'>

                <h1 className='overflow-scroll w-[70%] font-Sora font-[600] text-white text-[.75rem] sm:text-[1.5rem]'>https://cdn.jsdelivr.net/npm/paxiocode@1.0.1/index.min.js</h1>

                <button type="submit" className='sm:scale-[2] flex flex-row flex-nowrap items-center justify-center gap-[5px] px-[24px] py-[6px] bg-sky-600/50 rounded-[20px]'><span className='font-Sora font-[600] text-white text-[.75rem]'>Copy</span><FaRegCopy className='text-sky-500 text-[.75rem]'/></button>

            </div>

        </div>
        </>
    )
}

export default Paxio;