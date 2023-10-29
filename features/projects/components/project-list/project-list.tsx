import React, { useState } from "react";
import { ProjectCard } from "../project-card";
import { useGetProjects } from "@features/projects/";
import { Spinner } from "@features/layout";
import styles from "./project-list.module.scss";
import { RequestErrorRetry } from "@api/error.types";
import { RequestError } from "@features/layout";

export function ProjectList() {
  const [retryCount, setRetryCount] = useState(0);
  const { data, isLoading, isError, error } = useGetProjects(retryCount);

  const retry: RequestErrorRetry = () => {
    setRetryCount(retryCount + 1);
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.error(error);
    return <RequestError retryMethod={retry} />;
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
