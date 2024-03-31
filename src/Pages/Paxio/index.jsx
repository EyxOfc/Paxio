import React from 'react';

import bg from './../../img/background.png';

function Paxio(){
    return (
        <>
        <div className="flex flex-col flex-nowrap items-center justify-start w-full h-full p-[20px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>

            <h1 className='w-full font-Sora font-[900] text-white text-[3rem] text-left'>Paxio</h1>

            <p className='font-Sora font-[600] text-[1rem] text-neutral-950 text-justify'>Seja bem vindo e esperamos que curta e que sirva para seus projetos, Crie senha aleatorias e coloque em seus projetos.</p>

        </div>
        </>
    )
}

export default Paxio;