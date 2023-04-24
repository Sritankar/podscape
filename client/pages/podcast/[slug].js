import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Table } from '@mantine/core';
import Player from '@/components/Player';
import VideoPlayer from '@/components/VideoPlayer';

const elements = [
    {
        name: "Epidose 1",
        date: "15 Dec, 2020",
        duration: "1:30",
        src: "https://www.kozco.com/tech/LRMonoPhase4.wav",
        type: "audio"
    },
    {
        name: "Epidose 1",
        date: "15 Dec, 2020",
        duration: "1:30",
        src: "https://www.kozco.com/tech/LRMonoPhase4.wav",
        type: "audio"
    },
    {
        name: "Epidose 1",
        date: "15 Dec, 2020",
        duration: "1:30",
        src: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
        type: "audio"
    },
    {
        name: "Epidose 1",
        date: "15 Dec, 2020",
        duration: "1:30",
        src: "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3",
        type: "audio"
    },
    {
        name: "Epidose 1",
        date: "15 Dec, 2020",
        duration: "1:30",
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video"
    },
];



const Podcast = () => {
    const router = useRouter()
    const { slug } = router.query
    const [playing, setPlaying] = useState(false)
    const [videoPlaying, setVideoPlaying] = useState(false)
    const [src, setSrc] = useState('https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3')

    const startAudio = (element) => {
        setSrc(element.src)
        if(element.type == "audio"){
            setPlaying(true)
        }
        else{
            setVideoPlaying(true)
        }
    }

    const rows = elements.map((element, index) => (
        <tr className='hover:bg-[rgb(255,255,255,0.5)] group' key={element.name}>
            <td className='group-hover:block hidden w-8'>
                <button onClick={() => startAudio(element)} className='p-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </button>
            </td>
            <td className='group-hover:hidden block w-8'>{index + 1}</td>
            <td>{element.name}</td>
            <td className=''>{element.date}</td>
            <td className='group-hover:block hidden w-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            </td>
            <td className='group-hover:hidden block w-8'></td>
            <td>{element.duration}</td>
        </tr>
    ));
    return (
        <div className='bg-gradient-to-br from-teal-700 to-black text-white pt-10'>
            <div className="md:py-20 lg:px-20 py-12 md:px-12 px-8 h-fit">
                <div className='flex md:flex-row flex-col md:items-end items-start justify-between'>
                    <div className='md:w-1/4 w-1/2'>
                        <img className='shadow-2xl drop-shadow-2xl' src='/podcast.jpg' alt='' />
                    </div>
                    <div className='md:w-3/4 w-full md:pl-20 md:mt-0 mt-10'>
                        <p className='text-sm font-semibold'>Podcast</p>
                        <p className='lg:text-5xl md:text-4xl text-3xl font-bold mt-4'>Learn English Stories While Sleeping</p>
                        <p className='text-sm font-semibold mt-4'>By <span className='text-sky-500'>Bedtime Story</span></p>
                    </div>
                </div>
                <Table className='mt-10 text-white'>
                    <thead>
                        <tr>
                            <th className='text-gray-200'>#</th>
                            <th className='text-gray-200'>Name</th>
                            <th className='text-gray-200'>Date</th>
                            <th></th>
                            <th className='text-gray-200'>Duration</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </div>
            {
                playing && <Player playing={playing} src={src} />
            }
            {
                videoPlaying && <VideoPlayer playing={videoPlaying} src={src} setVideoPlaying={setVideoPlaying} />
            }
        </div>
    )
}

export default Podcast