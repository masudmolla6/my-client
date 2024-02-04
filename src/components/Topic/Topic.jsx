import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { topics_id, topics_name, topics_details, topics_about, picture } =topic;

    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {topics_name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{topics_details}</p>
          <div className="card-actions justify-end">
            <Link to={`/topic/${topics_id}`} className="badge badge-outline border-emerald-500 py-1">Get Premeum</Link>
          </div>
        </div>
      </div>
    );
};

export default Topic;