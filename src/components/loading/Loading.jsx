import React from "react";
import styles from "./loading.module.css";

function Loading(props) {
	return (
		<div className={styles.parent}>
			<div className={styles.wrapper}>
				<div className={styles.child}>
					<span className={styles.circle}></span>
					<span className={styles.circle}></span>
					<span className={styles.circle}></span>
					<span className={styles.circle}></span>
					<span className={styles.circle}></span>
					<span className={styles.circle}></span>
				</div>
			</div>
		</div>
	);
}

export default Loading;
