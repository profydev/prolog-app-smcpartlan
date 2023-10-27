import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
// import loadingSpinner from "../../../../public/icons/loading-spinner";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return (
      <div className={styles.loadingSpinnerContainer}>
        <div className={styles.spinnerContent}>
          <img
            className={styles.loadingSpinner}
            src="/icons/loading-spinner.svg"
            alt="Loading"
          />
        </div>
      </div>
    );
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
