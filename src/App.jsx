import { useState } from "react";
import NewProject from "./Components/NewProject.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import ProjectSidebar from "./Components/ProjectSidebar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleAddProject(data){
    setProjectState(pre=>{
      let id =Math.random();
      let newProject = {
        ...data,
        id: id
      }
      return {
        ...pre,
        selectedProjectId:undefined,
        projects : [...pre.projects, newProject]
      }
    })
  }

  function handleStartAddProject(){
    setProjectState(pre=>{
      return {
        ...pre,
        selectedProjectId: null
      }
    })
  }
  
  let content;
  
  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject}/>
  }else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onSelected={handleStartAddProject} />
  }

  return (
    <main className=" h-screen my-8 flex gap-8">
      <ProjectSidebar onSelected={handleStartAddProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
