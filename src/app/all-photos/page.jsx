import Category from '@/Components/Category';
import PhotoCard from '@/Components/Home/PhotoCard';
import React from 'react';

const AllPhotosPage = async ({searchParams}) => {
    const {category} = await searchParams;
    const res = await fetch("https://pixgen-plum.vercel.app/data.json", { cache: 'no-cache' });
    const photos = await res.json()
    const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos
    console.log(filteredPhotos);
    return (
        <div>
            <h1 className='text-2xl font-bold mt-5'>All Photos</h1>
            <Category></Category>
            <div className='grid grid-cols-4 gap-4 mt-3'>
                {
                    filteredPhotos.map((photo , ind) => <PhotoCard key={ind} photo={photo}>{photo.title}</PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;