import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, picture } = course;
    console.log(course);
    return (
      <div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w--full" src={picture} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="card-actions justify-end">
              <Link to={`/courses/${id}`} className="btn btn-primary">Topics</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Course;