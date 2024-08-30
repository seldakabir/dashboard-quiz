import React from "react";
import styles from "./CreateQuiz.module.css";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
export default function CreateQuiz() {
  const {
    createQuizSubmit,
    setQuizTitle,
    setQuizDescription,
    setQuizTotalQuestions,
    setQuizStatus,

    title,
    description,
    totalQuestions,
    status,

    topic1,
    setQuizTopic1,
    topic2,
    setQuizTopic2,
    topic3,
    setQuizTopic3,
    topic4,
    setQuizTopic4,
  } = UseQuiz();
  const navigate = useNavigate(); // Access the navigate function
  function handleQuizSubmit(e) {
    createQuizSubmit(e, navigate); // Pass the navigate function to your context method
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleQuizSubmit}>
        <h1> Quiz Information</h1>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setQuizTitle(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setQuizDescription(e.target.value)}
        ></input>
        <div className={styles.select}>
          <select
            value={status}
            onChange={(e) => setQuizStatus(e.target.value === "true")}
          >
            <option value="">Enter status</option>
            <option value={true}>Active</option>
            <option value={false}>Deactive</option>
          </select>
          <input
            type="number"
            placeholder="Enter Total Questions"
            value={totalQuestions}
            onChange={(e) => {
              e.target.value < 0
                ? (e.target.value = 0)
                : setQuizTotalQuestions(Number(e.target.value));
            }}
          ></input>
          <div className={styles.topics}>
            <h2>Enter Topics:</h2>

            <input
              type=""
              value={topic1}
              onChange={(e) => setQuizTopic1(e.target.value)}
            ></input>
            <input
              type=""
              value={topic2}
              onChange={(e) => setQuizTopic2(e.target.value)}
            ></input>
            <input
              type=""
              value={topic3}
              onChange={(e) => setQuizTopic3(e.target.value)}
            ></input>
            <input
              type=""
              value={topic4}
              onChange={(e) => setQuizTopic4(e.target.value)}
            ></input>
          </div>
        </div>

        <Button type="primary">Add Questions</Button>
      </form>
    </div>
  );
}
