import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Card from '@/components/Card'

const Artist = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div className='bg-[#0A0B0D] text-white'>
            <style jsx>{`
                    .parallax {
            background-image: url("/featured.jpg");
            min-height: 500px; 
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            }
        `}</style>
            <div className='parallax'></div>
            <div className="md:py-20 lg:px-20 py-12 md:px-12 px-8 h-fit">
                <h1 className='lg:text-5xl md:text-4xl text-2xl text-left font-bold'>Bedtime Story Podcaster</h1>
                <div className="flex justify-between items-center mt-12">
                    <h1 className='text-left font-bold lg:text-3xl md:text-2xl text-xl'>Podcasts<span className="text-sky-500">.</span></h1>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-6">
                    <Card image="/podcast.jpg" title="migration" />
                    <Card image="/podcast.jpg" title="migration" />
                    <Card image="/podcast.jpg" title="migration" />
                    <Card image="/podcast.jpg" title="migration" />
                </div>
            </div>
        </div>
    )
}

export default Artist