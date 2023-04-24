import React from 'react'
import Link from 'next/link'



const Card = ({ image, title, speaker }) => {
    return (
        <Link href='/podcast/the-late-show'>
            <div className='flex group flex-col shadow-xl pop'>
                <div className="card">
                    <img className='rounded-xl' src={image} alt={title} />
                    <button className="bg-[#2C5DF1] p-2 rounded-full shadow-2xl absolute bottom-4 right-4 group-hover:opacity-100 opacity-0 z-10 ease-in duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                        </svg>
                    </button>
                </div>
                <div className='py-6'>
                    <p className='text-sm font-bold'>{title}</p>
                    <p className='text-sm mt-2 font-thin'>{speaker}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card