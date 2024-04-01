import React from 'react';

function ButtonPaxioGerador({handleClickButtonGerador}){
    return (
        <>
        <button onClick={handleClickButtonGerador} type="submit" className='scale-[2] transition .3s flex flex-row flex-nowrap items-center justify-center min-h-[40px] w-[160px] mt-[10px] font-Sora text-white text-[.75rem] bg-white/10 border-[2px] border-white/5 rounded-[20px] backdrop-blur-sm hover:backdrop-blur-md'>Gerar</button>
        </>
    )
}

export default ButtonPaxioGerador;