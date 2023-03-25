import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // short on time so just doing project 1, 2, 3. will add assignments in future
  // name of project, github repo link for project, deployment link, and name of picture file
    const [projects] = useState([
        {
            name: 'Fresh Tomatoes',
            repo: 'https://github.com/jpinto2/fresh-tomatoes',
            deployment: "https://jpinto2.github.io/fresh-tomatoes/",
            picture: "project1"
        },
        {
            name: 'Casual Tryhard Reviews',
            repo: 'https://github.com/jpinto2/Casual-Tryhards-Game-Reviews',
            deployment: "https://hidden-river-32910.herokuapp.com/",
            picture: "project2"
        },
        {
            name: 'Fire Food',
            repo: 'https://github.com/jpinto2/Fire-Food',
            deployment: "https://afternoon-fjord-61826.herokuapp.com/",
            picture: "project3"
        },
    ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;