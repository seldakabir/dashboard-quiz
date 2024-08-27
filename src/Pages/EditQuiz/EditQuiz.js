import React from "react";
import styles from "./EditQuiz.module.css";
export default function EditQuiz() {
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
            <p>Add Qustion</p>
            <p className={styles.hrNum}> X/X Added</p>
          </div>
          <div className={styles.line}></div>

          <form>
            <input placeholder="title"></input>
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
