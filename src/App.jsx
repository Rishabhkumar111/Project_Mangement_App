import { useState } from "react";
import NewProject from "./Components/NewProject.jsx";
import NoProjectSelected from "./Components/NoProjectSelected.jsx";
import ProjectSidebar from "./Components/ProjectSidebar.jsx";
import SelectedProject from "./Components/SelectedProject.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject(data) {
    setProjectState((pre) => {
      let id = Math.random();
      let newProject = {
        ...data,
        id: id,
      };
      return {
        ...pre,
        selectedProjectId: undefined,
        projects: [...pre.projects, newProject],
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: null,
      };
    });
  }
  function handleCancleProject() {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: undefined,
        projects: pre.projects.filter(
          (pro) => pro.id !== pre.selectedProjectId
        ),
      };
    });
  }

  function handleSelectedProject(id) {
    setProjectState((pre) => {
      return {
        ...pre,
        selectedProjectId: id,
      };
    });
  }

  const selectedProjectId = projectState.projects.find(
    (pro) => pro.id === projectState.selectedProjectId
  );
  let content = <SelectedProject project={selectedProjectId} onDelete={handleDeleteProject}/>;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancle={handleCancleProject} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onSelected={handleStartAddProject} />;
  }

  return (
    <main className=" h-screen my-8 flex gap-8">
      <ProjectSidebar
        onSelected={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
