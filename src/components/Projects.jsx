import { projectsList } from "../datas/projectsList";

//State
//Comportement
const Projects = () => {
  //Render
  return (
    <div className="projectList">
      {projectsList.map((proj) => (
        <li key={proj.id}> {proj.name} </li>
      ))}
    </div>
  );
};

export default Projects;
