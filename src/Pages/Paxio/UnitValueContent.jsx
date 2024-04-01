import React from 'react';

function UnitValueContent({UnitValue}){
    return (
        <>
        <div className='scale-[2] transition .3s flex flex-row flex-nowrap items-center justify-center min-h-[40px] w-[160px] mt-[10px] font-Sora text-white text-[.75rem] bg-white/10 border-[2px] border-white/5 rounded-[20px] backdrop-blur-sm hover:backdrop-blur-md'>{UnitValue}</div>
        </>
    )
}

export default UnitValueContent;