import React from "react";
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
    return (
        <div className={styles.sad}>
            <h1>
                <span className={styles.NotFound}>:sad:</span>
                <br/>
                404 Not found.
            </h1>
            <p className={styles.description}>Access denied or page doesn't exist.</p>
        </div>
    )
};