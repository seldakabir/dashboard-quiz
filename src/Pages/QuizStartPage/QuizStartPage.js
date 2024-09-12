import React, { useState } from "react";
import styles from "./QuizStartPage.module.css";
import { Button } from "react-bootstrap";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { useNavigate, useParams } from "react-router-dom";

export default function QuizStartPage() {
  const { quizs, answerPoints, setAnswerPoints } = UseQuiz();
  const { quizId } = useParams();
  const [selectQuestionIndex, setSelectQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const selectedQuiz = quizs.find((q) => q.id === Number(quizId));
  const selected = selectedQuiz?.questions[selectQuestionIndex];
  const navigateToFinish = useNavigate();

  function handleOptionChange(e) {
    const optionValue = e.target.value;

    const point = selected.points;

    setSelectedOption(optionValue);
    const correct = optionValue === String(selected.correctOption);
    setIsCorrect(correct);

    if (isCorrect !== null) {
      setAnswerPoints((prevPoints) => prevPoints + point);
      console.log(answerPoints);
      console.log(point);
    }
  }

  const nextQuestion = () => {
    if (selectQuestionIndex < selectedQuiz?.questions.length - 1) {
      setSelectQuestionIndex((prevIndex) => prevIndex + 1);
      resetState();
    } else {
      navigateToFinish(`/FinishedPage`);
    }
  };

  const prevQuestion = () => {
    if (selectQuestionIndex > 0) {
      setSelectQuestionIndex((prevIndex) => prevIndex - 1);
      resetState();
    }
  };

  const resetState = () => {
    setIsCorrect(null);
    setSelectedOption(null);
  };

  const submitAnswer = (e) => {
    e.preventDefault();
    nextQuestion();
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {selectedQuiz?.questions.map((_, index) => (
          <div
            key={index}
            className={`${styles.number} ${
              selectQuestionIndex === index ? styles.numActive : ""
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className={styles.main}>
        <div className={styles.header}>
          <p>Question {selectQuestionIndex + 1}</p>
          <p>
            {selectQuestionIndex + 1}/{selectedQuiz?.totalQuestions} Completed
          </p>
        </div>
        <form className={styles.page} onSubmit={submitAnswer}>
          <div className={styles.question}>{selected?.question}</div>
          {selected?.options.map((option, index) => (
            <div className={styles.options} key={index}>
              <input
                type="radio"
                id={`option${index}`}
                name="option"
                value={index}
                onChange={handleOptionChange}
                disabled={selectedOption != null}
                checked={selectedOption === String(index)}
              />
              <label htmlFor={`option${index}`}>{option}</label>
            </div>
          ))}

          <div className={styles.buttons}>
            <Button onClick={prevQuestion} type="button">
              Previous Question
            </Button>
            <Button type="submit">
              {selectQuestionIndex < selectedQuiz?.questions.length - 1
                ? "Next Question"
                : "Confirm"}
            </Button>
          </div>
        </form>
        <footer>
          {isCorrect !== null && (
            <div
              className={styles.result}
              style={{ color: isCorrect ? "green" : "red" }}
            >
              {isCorrect ? "Correct Answer!" : "Wrong Answer!"}
            </div>
          )}
        </footer>
      </div>
    </div>
  );
}
