import React, { useEffect, useState } from "react";
import styles from "./EditQuiz.module.css";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
export default function EditQuiz() {
  const {
    quizs,
    setQuizs,
    totalQuestions,
    question,
    setQuestion,
    option1,
    setOption1,
    option2,
    setOption2,
    option3,
    setOption3,
    option4,
    setOption4,
    correctOption,
    setCorrectOption,
    points,
    setPoints,
  } = UseQuiz();
  const { quizId } = useParams();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [quizTotalQuestions, setQuizTotalQuestions] = useState("");
  const [currentTotalPoints, setCurrentTotalPoints] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const quiz = quizs.find((q) => q.id === Number(quizId));
    setSelectedQuiz(quiz);
    if (quiz) {
      setQuestionCount(quiz.questions.length);
      setQuizTotalQuestions(quiz.totalQuestions);
      setCurrentTotalPoints(
        quiz.questions.reduce((sum, q) => sum + q.points, 0)
      );
    }
  }, [quizId, quizs, questionCount, quizTotalQuestions]);

  if (!selectedQuiz) {
    return <Spinner />;
  }
  function addQuestionSubmit(e) {
    e.preventDefault();

    if (!question) return alert("Please enter question");
    if (!option1 && !option2 && !option3 && !option4)
      return alert("Please enter option");

    if (!points) return alert("Please enter point");
    if (!correctOption) return alert("Please enter a correcctOption");
    if (currentTotalPoints + points > 100)
      return alert("Total points cannot exceed 100");

    const newQuestions = {
      question,
      options: [option1, option2, option3, option4],
      correctOption,
      points,
    };
    addQuestion(newQuestions, quizId);
    setQuestionCount((prevCount) => prevCount + 1);
    console.log(`"total"${quizTotalQuestions}`);
    console.log(`"count"${questionCount}`);
    if (questionCount + 1 >= quizTotalQuestions) {
      navigate("/dashboard");

      return;
    }

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

  return (
    <div className={styles.container}>
      <hr className={styles.hrColor}></hr>
      <div className={styles.quizContainer}>
        <div className={styles.sidebar}>
          <div>
            {selectedQuiz.questions.map((question, index) => (
              <div key={index} className={styles.qustionContainer}>
                <p className={styles.questNum}>{index + 1}</p>
                <p>{question.question}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.questionHeader}>
            <p>Add Qustions to {selectedQuiz.title}</p>
            <p className={styles.hrNum}>
              {" "}
              {questionCount}/{quizTotalQuestions} Added
            </p>
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
                checked={correctOption === 1}
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
                checked={correctOption === 2}
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
                checked={correctOption === 3}
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
                checked={correctOption === 4}
                onChange={(e) => setCorrectOption(Number(e.target.value))}
              />{" "}
            </div>

            <div className={styles.footer}>
              <input
                placeholder="Point"
                type="text"
                value={points}
                onChange={(e) =>
                  Number(e.target.value) > 100
                    ? Number(e.target.value)
                    : setPoints(Number(e.target.value))
                }
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
              {questionCount < quizTotalQuestions - 1 ? (
                <button className={styles.but} type="submit">
                  Next Question
                </button>
              ) : (
                <button className={styles.but}>confrim</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
