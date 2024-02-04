import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();

    const { topics_id, topics_name, topics_details, topics_about, picture } = data;

    return (
        <div className='flex justify-center items-center'>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">{topics_name}</h2>
            <p>{topics_details}</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;