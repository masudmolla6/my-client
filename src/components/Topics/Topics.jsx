import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const loadedData = useLoaderData();
    console.log(loadedData);
    return (
        <div className='px-12'>
            <h1>Topics:{loadedData.length}</h1>
            <div className='grid grid-cols-3 gap-3'>
                {loadedData.map(topic=><Topic key={topic._id} topic={topic}></Topic>)}
            </div>
        </div>
    );
};

export default Topics;