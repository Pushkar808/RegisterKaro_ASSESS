import React from 'react'

const FeedCard = () => {
    return (
        <div className='md:w-[400px] p-4 bg-white rounded-sm'>
            <div className='flex justify-between'>
                <div>
                    <img src="quotes.png" className='w-7' />
                </div>
                <div>
                    <img src="/star.png"/>
                </div>
            </div>
            <div className='text-md text-[#667085] my-4'>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident
            </div>
            <div className='flex items-center gap-2 '> 
                <div className='w-10'><img src="/div.lazyloaded.png" /></div>
                <div className='text-xs'> 
                    <div className='font-bold'>Chris</div>
                    <div>President and CEO, PrintReach, USA</div>
                </div>
            </div>

        </div>
    )
}

export default FeedCard