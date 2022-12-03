import { projectsList } from "../datas/projectsList";

//State
//Comportement
const Projects = () => {
  //Render
  return (
    <section className="projectsSection">
      <div className="sectionTitle">
        <h2>Mes Projets</h2>
      </div>
      <div className="projectList">
        {projectsList.map((proj) => (
          <div className="project" key={proj.id}>
            <h2 className="projectTitle">{proj.name}</h2>
            <img className="projectImg" src={proj.cover} alt=""></img>
            
            <p className="projectDescription">{proj.description}</p>
            <div className="projectTechno"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
