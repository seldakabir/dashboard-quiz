import React from "react";
import styles from "./QuestionBox.module.css";
import { UseQuiz } from "../../Contexts/QuizProvider";
export default function QuestionBox() {
  const [quizs] = UseQuiz();
}
