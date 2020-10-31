import React, { useState, useEffect } from 'react'

import api from './services/api'

import './app.css';
// import background from './assets/background.jpg'

{/* <img width={500} src={background}/> */ }

import Header from "./components/Header";


function App() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProject(response.data)
    })
  }, [])

  async function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`);

    // setProject([...projects,`Novo Projeto ${Date.now()}`]);

    const response = await api.post('/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Fernando Maycon"
    })

    const project = response.data;

    setProject([...projects, project])


  }

  return (
    <>
      <Header title="Project">


        <ul>
          {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Project</button>

      </Header>
    </>
  );
}

export default App;