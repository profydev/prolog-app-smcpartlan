import React, { useState } from "react";
import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import { Spinner } from "../../../layout/spinner";
import styles from "./project-list.module.scss";
import { Button } from "../../../ui/button";

export function ProjectList() {
  const [retryCount, setRetryCount] = useState(0);
  const { data, isLoading, isError, error } = useGetProjects(retryCount);

  const retry = () => {
    setRetryCount(retryCount + 1);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.error(error);
    return (
      <div className={styles.errorContainer} data-cy="error">
        <img
          className={styles.alertIcon}
          src="/icons/alert-circle.svg"
          alt="Error"
        />
        <div className={styles.errorContent}>
          <div className={styles.errorText}>
            There was a problem while loading the project data
          </div>
          <div className={styles.actionContainter}>
            <Button
              className={styles.tryAgainButton}
              onClick={retry}
              data-cy="retry"
            >
              <div className={styles.tryAgainButtonBase}>
                <div className={styles.buttonText}>Try Again</div>
                <img
                  className={styles.buttonIcon}
                  src="/icons/red-arrow-right.svg"
                  alt="Try Again"
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    );
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
