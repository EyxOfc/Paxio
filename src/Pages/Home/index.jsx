import React from 'react';

import bg from './../../img/background.png'

function Home(){
    return (
        <>
        <div className="flex flex-col flex-nowrap items-center justify-center gap-[10px] sm:gap-[50px] w-full h-full p-[20px] bg-cover bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>

            <h1 className='sm:scale-[2] w-full max-w-[420px] mb-[20px] sm:mb-[40px] font-Sora font-[900] text-center text-white'>Utilize nosso criador de senha, Conecte com seus projetos e sinta se mais seguro.</h1>

            <a href="/paxio" className='sm:scale-[2] transition .3s flex flex-row flex-nowrap items-center justify-center h-[40px] w-[160px] sm:mb-[20px] font-Sora text-white text-[.75rem] bg-white/10 border-[2px] border-white/5 rounded-[20px] backdrop-blur-sm hover:backdrop-blur-md'>Criar Senha</a>

            <a href="https://github.com/EyxOfc/Paxio" target='_blank' className='sm:scale-[2] transition .3s flex flex-row flex-nowrap items-center justify-center h-[40px] w-[160px] sm:mb-[20px] font-Sora text-white text-[.75rem] bg-white/10 border-[2px] border-white/5 rounded-[20px] backdrop-blur-sm hover:backdrop-blur-md' rel="noreferrer">Git Hub</a>

            <a href="https://eyxcode.netlify.app" target='_blank' className='sm:scale-[2] transition .3s flex flex-row flex-nowrap items-center justify-center h-[40px] w-[160px] font-Sora text-white text-[.75rem] bg-white/10 border-[2px] border-white/5 rounded-[20px] backdrop-blur-sm hover:backdrop-blur-md' rel="noreferrer">Criador Paxio</a>

        </div>
        </>
    )
}

export default Home;