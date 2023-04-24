import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, getStylesRef } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import Link from 'next/link';


function Card({ image, title }) {

    return (
        <div className='flex flex-col shadow-lg p-2 hover:shadow-2xl group'>
            <div className="card">
                <img className='rounded-t-xl' src={image} alt={title} />
                <button className="bg-[#2C5DF1] p-2 rounded-full shadow-2xl absolute bottom-4 right-4 group-hover:opacity-100 opacity-0 z-10 ease-in duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                </button>
            </div>
            <div className='bg-[#181C1F] px-4 py-6 rounded-b-xl'>
                <p className='text-sm font-bold'>The 99% Podcast</p>
                <p className='text-sm mt-2 font-thin'>Artist</p>
            </div>
        </div>
    );
}

const data = [
    {
        image:
            "./podcast.jpg",
        title: 'Migration',
    },
    {
        image:
            "./podcast.jpg",
        title: 'Migration',
    },
    {
        image:
            "./podcast.jpg",
        title: 'Migration',
    },
    {
        image:
            "./podcast.jpg",
        title: 'Migration',
    },
    {
        image:
            "./podcast.jpg",
        title: 'Migration',
    },
    {
        image:
            "./podcast.jpg",
        title: 'Migration',
    },
];

export function CardsCarousel() {
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <div>
            <h1 className='text-center mt-10 font-bold lg:text-4xl md:text-3xl text-2xl overflow-visible'>Most Popular<span className="text-sky-500">.</span></h1>
            <Carousel
                slideSize="33%"
                breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 1 }]}
                slideGap="xl"
                align="start"
                slidesToScroll={1}
                className="my-10 md:px-5 px-2 overflow-visible"
                loop
                plugins={[autoplay.current]}
                withControls={false}
            >
                {slides}
            </Carousel>
        </div>
    );
}

export default CardsCarousel;