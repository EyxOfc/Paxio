import React from 'react';

function Home(){
    return (
        <>
        <div className="flex flex-col flex-nowrap items-center justify-center w-full h-full bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">

            <h1 className='w-full max-w-[420px] mb-[10px] font-Sora font-[900] text-center text-white'>Utilize nosso criador de senha, Conecte com seus projetos e sinta se mais seguro.</h1>

            <a href="/pexio" className='transition .3s flex flex-row flex-nowrap items-center justify-center h-[40px] w-[160px] mt-[10px] font-Sora text-white text-[.75rem] bg-white/10 border-[2px] border-white/5 rounded-[20px] backdrop-blur-sm hover:backdrop-blur-md'>Criar Senha</a>

            <a href="https://github.com/EyxOfc" target='_blank' className='transition .3s flex flex-row flex-nowrap items-center justify-center h-[40px] w-[160px] mt-[10px] font-Sora text-white text-[.75rem] bg-white/10 border-[2px] border-white/5 rounded-[20px] backdrop-blur-sm hover:backdrop-blur-md' rel="noreferrer">Git Hub</a>

            <a href="https://eyxcode.netlify.app" target='_blank' className='transition .3s flex flex-row flex-nowrap items-center justify-center h-[40px] w-[160px] mt-[10px] font-Sora text-white text-[.75rem] bg-white/10 border-[2px] border-white/5 rounded-[20px] backdrop-blur-sm hover:backdrop-blur-md' rel="noreferrer">Criador Pexio</a>

        </div>
        </>
    )
}

export default Home;