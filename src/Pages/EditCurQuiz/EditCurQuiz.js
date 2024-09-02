import React, { useEffect, useState } from "react";
import styles from "./EditCurQuiz.module.css";
import { UseQuiz } from "../../Contexts/QuizProvider";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
export default function EditQuiz() {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [points, setPoints] = useState("");
  const { quizs, setQuizs } = UseQuiz();
  const { quizId } = useParams();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);
  const [quizTotalQuestions, setQuizTotalQuestions] = useState("");
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const quiz = quizs.find((q) => q.id === Number(quizId));
    setSelectedQuiz(quiz);
    if (quiz) {
      setQuestionCount(quiz.questions.length);
      setQuizTotalQuestions(quiz.totalQuestions);
    }
  }, [quizId, quizs]);

  if (!selectedQuiz) {
    return <Spinner />;
  }

  function selectedQuestion(index) {
    if (
      !selectedQuiz ||
      !selectedQuiz.questions ||
      index >= selectedQuiz.questions.length
    ) {
      console.error("Invalid question index or selectedQuiz is undefined.");
      return;
    }
    setSelectedQuestionIndex(index);
    const selected = quizs.find((q) => q.id === Number(quizId));
    setQuestion(selected.questions[index].question);
    setOption1(selected.questions[index].options[0]);
    setOption2(selected.questions[index].options[1]);
    setOption3(selected.questions[index].options[2]);
    setOption4(selected.questions[index].options[3]);
    setPoints(selected.questions[index].points);
    setCorrectOption(selected.questions[index].correctOption);
    console.log(selected);
  }
  function submitCorrectQuestions() {
    const updatedQuizs = quizs.map((quiz) => {
      if (quiz.id === Number(quizId)) {
        const updatedQuestions = quiz.questions.map((q, index) => {
          if (index === selectedQuestionIndex) {
            return {
              question,
              options: [option1, option2, option3, option4],
              correctOption,
              points,
            };
          }
          return q;
        });

        return { ...quiz, questions: updatedQuestions };
      }
      return quiz;
    });
    setQuizs(updatedQuizs);
    navigate("/dashboard");
    console.log("Questions updated successfully");
  }
  console.log(selectedQuiz);
  return (
    <div className={styles.container}>
      <hr className={styles.hrColor}></hr>
      <div className={styles.quizContainer}>
        <div className={styles.sidebar}>
          <div>
            {selectedQuiz.questions.map((question, index) => (
              <div
                key={index}
                className={styles.qustionContainer}
                onClick={() => selectedQuestion(index)}
              >
                <p className={styles.questNum}>{index}</p>
                <p>{question.question}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.questionHeader}>
            <p>Edit Qustions of {selectedQuiz.title}</p>
            <p className={styles.hrNum}>
              {" "}
              {questionCount}/{quizTotalQuestions} Added
            </p>
          </div>
          <div className={styles.line}></div>

          <form onSubmit={submitCorrectQuestions}>
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

              <button className={styles.but} type="submit">
                Edit Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
