import React from 'react';

function Project({ project }) {

  const { name, repo, deployment, picture } = project;

  return (
    <div className="container-fluid d-flex flex-column bg-info text-white" key={name}>
      <img
        src={require(`${picture}.png`).default}
        alt={name}
        width="300" height="300"> 
        </img>
      <div>
        <h3>
          <a href={deployment}>{name}</a>{' '}
          <a href={repo}>Github Repo</a>
        </h3>
      </div>
    </div>
  );
}

export default Project;