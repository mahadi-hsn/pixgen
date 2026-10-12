import PhotoCard from '@/Components/Home/PhotoCard';
import React from 'react';

const AllPhotosPage = async () => {
    const res = await fetch("https://pixgen-plum.vercel.app/data.json");
    const photos = await res.json()
    return (
        <div>
            <h1 className='text-2xl font-bold mt-5'>All Photos</h1>
            <div className='grid grid-cols-4 gap-4 mt-3'>
                {
                    photos.map((photo , ind) => <PhotoCard key={ind} photo={photo}>{photo.title}</PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;