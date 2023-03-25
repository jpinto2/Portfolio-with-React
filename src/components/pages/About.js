import React from 'react';
import avatar from 'gundam.jpg';
// keeping bio short for now since i'm in rush
function About() {
    return (
        <div className='container-fluid d-flex flex-column bg-success text-white'>
            <img src={avatar} alt="avatar" width="300" height="300"></img>
            <p>My name is John Pinto. I graduated with a Computer Science BS degree from chico state
                <br></br>
                I also completed the UC Davis web development course.
            </p>
        </div>
  );
}

export default About;