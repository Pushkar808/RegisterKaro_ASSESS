import React from 'react'
import { MdArrowOutward } from 'react-icons/md';


const BlogCard = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div>
                <img src="Image.png" className='rounded-sm w-full' />
            </div>
            <div className='text-[#667085] text-xs mt-6'>
                Prabhash Mishra • 1 Jan 2023 • Today
            </div>
            <div className='text-[22px] font-bold flex justify-between items-baseline'>
                Small business & Startup
                <MdArrowOutward />
            </div>
            <div className='text-[#667085] text-sm'>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</div>
            <div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ">Default</span>
            </div>
        </div>
    )
}

export default BlogCard;