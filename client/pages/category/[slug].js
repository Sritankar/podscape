import React from 'react'
import { useRouter } from 'next/router'
import Screens from '@/components/Screens'
import Card from '@/components/Card'

const Category = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div className="bg-[#0A0B0D] text-white">
            <Screens screen={2} title={slug} bg="/cover.jpg" />
            <div className="md:py-20 lg:px-20 py-12 md:px-12 px-8 h-fit">
                <div className="flex justify-between items-center">
                    <h1 className='text-left font-bold lg:text-3xl md:text-2xl text-xl'>Latest from <span className='capitalize'>{slug}</span><span className="text-sky-500">.</span></h1>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6 mt-8">
                    <Card image="/podcast.jpg" title="migration" />
                    <Card image="/podcast.jpg" title="migration" />
                    <Card image="/podcast.jpg" title="migration" />
                    <Card image="/podcast.jpg" title="migration" />
                </div>
            </div>
        </div>
    )
}

export default Category