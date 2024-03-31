import React from 'react';

function ButtonPaxio({Text, handleClickUnitButton}){
    return (
        <>
        <button onClick={() => {handleClickUnitButton(Text)}} type="submit" className='transition .3s w-[40px] h-[40px] font-Sora font-[900] text-white bg-white/10 border-[2px] border-white/5 rounded-[10px] backdrop-blur-sm hover:backdrop-blur-md'>{Text}</button>
        </>
    )
}

export default ButtonPaxio;