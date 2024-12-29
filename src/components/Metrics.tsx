import React from 'react'


type prop = {
    title: string,
    description: string
}
const Metrics = ({ title, description }: prop) => {
    return (
        <div className='text-center w-full'>
            <div className='text-[42px] font-bold bg-gradient-to-b from-[#c28c48]  to-[#2f5795] bg-clip-text text-transparent'>{title}+</div>
            <div className='uppercase text-center text-xs font-bold w-full'>{description}</div>
        </div>
    )
}

export default Metrics