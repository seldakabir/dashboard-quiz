import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="header">
        <img src="./Images/logo.png" alt="logo" className="logo"></img>
        <div className="sign">
          <p>Sing Up</p>
          <p>Sing In</p>
        </div>
      </div>
      <main className="main">
        <img src="./Images/image.jpg" alt="imag" className="image"></img>
        <div className="main-text">
          <h2>Quiz Builer And Assessment Tool</h2>
          <p>
            Using Quiz,it's super fast and easy to create a quiz- perfect for
            revision guides,driving theory practice and trivia.
          </p>
          <button>Start Building</button>
        </div>
      </main>
    </div>
  );
}

export default App;
