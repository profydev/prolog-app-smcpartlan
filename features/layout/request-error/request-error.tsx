import React from "react";
import styles from "./request-error.module.scss";
import { RequestErrorRetry } from "@api/error.types";

interface RequestErrorProps {
  retryMethod: RequestErrorRetry;
}

export function RequestError({ retryMethod }: RequestErrorProps) {
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
          <button
            className={styles.tryAgainButton}
            onClick={retryMethod}
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
          </button>
        </div>
      </div>
    </div>
  );
}
