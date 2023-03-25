import React from 'react';
// keeping bio short for now since i'm in rush
function About() {
    return (
        <div className='container-fluid d-flex flex-column bg-success text-white'>
            <img src='https://github.com/jpinto2/Portfolio-with-React/blob/main/src/components/pages/gundam.jpg' alt="avatar" width="300" height="300"></img>
            <p>My name is John Pinto. I graduated with a Computer Science BS degree from chico state
                <br></br>
                I also completed the UC Davis web development course.
            </p>
        </div>
  );
}

export default About;