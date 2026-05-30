import React from 'react';
import styles from './Topbar.module.css';
import BackBtn from '../Buttons/BackBtn';

const Topbar = ({ allStepStatus }) => {
    const allSteps = [
        { stepName: "upload", },
        { stepName: "select", },
        { stepName: "details", },
        { stepName: "preview", },
    ];
    return (
        <div className={styles["topbar"]}>
            <div className={styles['top-bar-top']}>
                <h2>Create Stub</h2>
            </div>
            <div className={styles["progress-bar"]}>
                {allSteps.map((step) => {
                    return (
                        <div key={step.stepName}>
                            <div className={`${styles['bar']} ${styles[allStepStatus[step.stepName] ? "completed" : "remaining"]}`}></div>
                            <span>{step.stepName}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Topbar