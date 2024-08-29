import React, { useState } from "react";
import styles from "./EditQuiz.module.css";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { useParams } from "react-router-dom";
export default function EditQuiz() {
  const [qustions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState("");
  const [points, setPoints] = useState("");
  const { quizs, setquizs } = UseQuiz();
  const { quizId } = useParams();

  function addQuestionSubmit(e) {
    e.preventDefault();
    const newQuestions = { question, options, correctOption, points };
    addQuestion(newQuestions, quizId);
  }
  function addQuestion(question, quizId) {
    setquizs(
      quizs.map((q) =>
        q.id === Number(quizId)
          ? { ...q, questions: [...q.questions, question] }
          : q
      )
    );
  }
  return (
    <div className={styles.container}>
      <hr className={styles.hrColor}></hr>
      <div className={styles.quizContainer}>
        <div className={styles.sidebar}>
          <div className={styles.qustionContainer}>
            <p className={styles.questNum}>1</p>
            <p>Qustion Text</p>
          </div>
          <div className={styles.qustionContainer}>
            <p className={styles.questNum}>1</p>
            <p>Qustion Text</p>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.questionHeader}>
            <p>Add Qustions to X</p>
            <p className={styles.hrNum}> X/X Added</p>
          </div>
          <div className={styles.line}></div>

          <form>
            <input placeholder="Question"></input>
            <div className={styles.correctContainer}>
              <p>Options</p>
              <p>Correct</p>
            </div>
            <div className={styles.optionContainer}>
              <input placeholder="option 1" className={styles.options}></input>
              <input type="radio" value="option1" checked={true} />{" "}
            </div>
            <div className={styles.optionContainer}>
              <input placeholder="option 2" className={styles.options}></input>
              <input type="radio" value="option1" />{" "}
            </div>
            <div className={styles.optionContainer}>
              <input placeholder="option 3" className={styles.options}></input>
              <input type="radio" value="option1" />{" "}
            </div>
            <div className={styles.optionContainer}>
              <input placeholder="option 4" className={styles.options}></input>
              <input type="radio" value="option1" />{" "}
            </div>
            <div>
              <div>
                *Marking a correct option is only allowed after you have already{" "}
                written all options.
              </div>
              <div className={styles.note}>
                Note: Please be carefull before creating a question because if
                you have to later edit it you will lose all responses to the
                question. This is done so that we can provide you better and
                correct staticts.
              </div>
            </div>
            <div className={styles.buttons}>
              <button>Cancel</button>
              <button>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
