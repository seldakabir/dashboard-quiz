import React, { useEffect, useState } from "react";
import styles from "./EditQuiz.module.css";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { useNavigate, useParams } from "react-router-dom";
export default function EditQuiz() {
  const [qustions, setQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [points, setPoints] = useState("");
  const { quizs, setQuizs, totalQuestions } = UseQuiz();
  const { quizId } = useParams();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const quiz = quizs.find((q) => q.id === Number(quizId));
    setSelectedQuiz(quiz);
    if (quiz) {
      setQuestionCount(quiz.questions.length);
    }
  }, [quizId, quizs]);

  if (!selectedQuiz) {
    return <div>Loading...</div>;
  }
  function addQuestionSubmit(e) {
    e.preventDefault();
    const newQuestions = {
      question,
      options: [option1, option2, option3, option4],
      correctOption,
      points,
    };
    addQuestion(newQuestions, quizId);
    setQuestionCount(questionCount + 1);

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setPoints("");
    setCorrectOption("");
  }
  function addQuestion(question, quizId) {
    setQuizs(
      quizs.map((q) =>
        q.id === Number(quizId)
          ? { ...q, questions: [...q.questions, question] }
          : q
      )
    );
  }
  function handleConfirm() {
    navigate("/dashboard");
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
            <p>Add Qustions to {selectedQuiz.title}</p>
            <p className={styles.hrNum}> X/X Added</p>
          </div>
          <div className={styles.line}></div>

          <form onSubmit={addQuestionSubmit}>
            <input
              placeholder="Question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></input>
            <div className={styles.correctContainer}>
              <p>Options</p>
              <p>Correct</p>
            </div>
            <div className={styles.optionContainer}>
              <input
                type="text"
                placeholder="Option 1"
                className={styles.options}
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
              ></input>
              <input
                type="radio"
                name="options"
                value="1"
                // checked={options === "1"}
                onChange={(e) => setCorrectOption(Number(e.target.value))}
              />{" "}
            </div>
            <div className={styles.optionContainer}>
              <input
                type="text"
                placeholder="Option 2"
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
                className={styles.options}
              ></input>
              <input
                type="radio"
                name="options"
                value="2"
                // checked={options === "2"}
                onChange={(e) => setCorrectOption(Number(e.target.value))}
              />{" "}
            </div>
            <div className={styles.optionContainer}>
              <input
                placeholder="option 3"
                type="text"
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
                className={styles.options}
              ></input>
              <input
                type="radio"
                name="options"
                value="3"
                // checked={options === "3"}
                onChange={(e) => setCorrectOption(Number(e.target.value))}
              />{" "}
            </div>
            <div className={styles.optionContainer}>
              <input
                placeholder="option 4"
                type="text"
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
                className={styles.options}
              ></input>
              <input
                type="radio"
                name="options"
                value="4"
                // checked={options === "4"}
                onChange={(e) => setCorrectOption(Number(e.target.value))}
              />{" "}
            </div>

            <div className={styles.footer}>
              <input
                placeholder="Point"
                type="text"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
                className={styles.points}
              ></input>
              <div className={styles.star}>
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
              {questionCount >= totalQuestions ? (
                <button type="button" onClick={handleConfirm}>
                  Confirm
                </button>
              ) : (
                <button type="submit">Submit</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
