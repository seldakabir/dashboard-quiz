import React, { useEffect, useState } from "react";
import styles from "./QuizStartPage.module.css";
import { Button } from "react-bootstrap";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { useParams } from "react-router-dom";
export default function QuizStartPage() {
  const { quizs } = UseQuiz();

  const { quizId } = useParams();
  const [selectQuestionIndex, setSelectQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const selectedQuiz = quizs.find((q) => q.id === Number(quizId));
  let selected = selectedQuiz?.questions[selectQuestionIndex];

  function handleOptionChange(e) {
    const optionValue = e.target.value;
    setSelectedOption(optionValue);

    console.log(selectedOption);

    if (optionValue === String(selected.correctOption)) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }
  const nextQuestion = () => {
    if (selectQuestionIndex < selectedQuiz?.questions.length - 1) {
      setSelectQuestionIndex(selectQuestionIndex + 1);
      resetState();
    }
  };
  const prevQuestion = () => {
    if (selectQuestionIndex > 0) {
      setSelectQuestionIndex(selectQuestionIndex - 1);
      resetState();
    }
  };
  const resetState = () => {
    setAnswer("");
    setIsCorrect(null);
    setSelectedOption(null);
  };

  function submitAnswer() {}
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {selectedQuiz?.questions.map((question, index) => (
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
        <form className={styles.page}>
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
            <Button onClick={prevQuestion}>Previus Question </Button>
            <Button onClick={nextQuestion}>
              {selectQuestionIndex < selectedQuiz?.questions.length - 1
                ? "Next Question"
                : "confirm"}
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
