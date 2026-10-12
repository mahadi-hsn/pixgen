import React from 'react';
import PhotoCard from './PhotoCard';

const TopGeneration = async () => {
    const res = await fetch("https://pixgen-plum.vercel.app/data.json");
    const photos = await res.json()
    return (
        <div>
            <h1 className='text-2xl font-bold mt-5'>Top Generations</h1>
            <div className='grid grid-cols-4 gap-4 mt-3'>
                {
                    photos.slice(0 , 9).map((photo , ind) => <PhotoCard key={ind} photo={photo}>{photo.title}</PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGeneration;
const res = await fetch("https://pixgen-plum.vercel.app/data.json");