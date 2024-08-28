import React from "react";
import styles from "./CreateQuiz.module.css";
export default function CreateQuiz() {
  return (
    <div className={styles.container}>
      <form>
        <h1> Quiz Information</h1>
        <input type="text" placeholder="Enter Title"></input>
        <input type="text" placeholder="Enter Explain"></input>
        <input type="text" placeholder="Enter Title"></input>
        <input type="number" placeholder="Enter Total Questions"></input>
        <h2>Enter Topics:</h2>
        <div className={styles.topics}>
          <input type=""></input>
          <input type=""></input>
          <input type=""></input>
          <input type=""></input>
        </div>
        <button>Add Questions</button>
      </form>
    </div>
  );
}
