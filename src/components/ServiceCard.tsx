import React from 'react'

type ServiceProp = {
    imageUrl: string,
    heading: string,
    description: string
}
const ServiceCard = ({ imageUrl, heading, description }: ServiceProp) => {
    return (
        <div className='flex flex-col items-center gap-7'>
            <div>
                <img src={imageUrl} alt="serviceImg" />
            </div>
            <div>
                <h5 className='font-bold text-xl'>{heading}</h5>
            </div>
            <div className='text-center text-lg text-[#282728]'>
                {description}
            </div>
            <div>
                Learn More
            </div>
        </div>
    )
}

export default ServiceCard;