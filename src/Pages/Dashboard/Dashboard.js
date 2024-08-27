import React from "react";
import styles from "./Dashboard.module.css";
export default function Dashboard() {
  return (
    <div>
      <header>
        <h1>Dasboard</h1>
        <div className={styles.header}>
          <h3>My Quizes</h3>
          <button>+Create Quiz</button>
        </div>
      </header>
    </div>
  );
}
