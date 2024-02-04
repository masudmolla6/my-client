import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
            .then(res => res.json())
            .then(data => setData(data))
    },[])


    return (
      <div className="text-center w-full px-32">
        <h1 className="text-2xl text-emerald-300 py-4">
          Courses:{data.length}
        </h1>
        <div className="grid grid-cols-3 gap-3 ">
          {data.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    );
};

export default Courses;