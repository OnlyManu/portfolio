import { projectsList } from "../datas/projectsList";

const Projects = () => {
  //State
  //Comportement

  //Render
  return (
    <section className="projectsSection">
      <div className="sectionTitle">
        <h2>Mes Projets</h2>
      </div>
      <div className="projectList">
        {projectsList.map((proj) => (
          <div className="project" key={proj.id}>
            
            <div className="projectInfo">
              <h2 className="projectTitle">{proj.name}</h2>
              <img className="projectImg" src={proj.cover} alt=""></img>
              <p className="projectDescription">{proj.description}</p>
            </div>
            <div className="projectTechno">
              {proj.techno.map((tech, index) => (
                <img
                  className="technos"
                  key={index}
                  src={tech}
                  alt="languages used"
                ></img>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
