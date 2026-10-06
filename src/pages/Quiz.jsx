import { useState } from "react";
import "./Quiz.css";

const questionBank = [
  {
    question: "What is a variable in Python?",
    options: [
      "A container for storing data",
      "A Python library",
      "A loop",
      "A function",
    ],
    answer: "A container for storing data",
    topic: "Python",
  },
  {
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun", "define"],
    answer: "def",
    topic: "Python",
  },
  {
    question: "Which data structure stores key-value pairs?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    answer: "Dictionary",
    topic: "Python",
  },
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "System Query Logic",
      "Structured Question Language",
    ],
    answer: "Structured Query Language",
    topic: "DBMS",
  },
  {
    question: "Which SQL command is used to retrieve data?",
    options: ["GET", "SELECT", "FETCH", "READ"],
    answer: "SELECT",
    topic: "DBMS",
  },
  {
    question: "What is a primary key?",
    options: [
      "A duplicate column",
      "A unique identifier for a record",
      "A foreign table",
      "A database password",
    ],
    answer: "A unique identifier for a record",
    topic: "DBMS",
  },
  {
    question: "What does AI stand for?",
    options: [
      "Automatic Information",
      "Artificial Intelligence",
      "Advanced Internet",
      "Automated Interface",
    ],
    answer: "Artificial Intelligence",
    topic: "AI / ML",
  },
  {
    question: "Which is a machine learning algorithm?",
    options: [
      "Linear Regression",
      "HTML",
      "CSS",
      "JSON",
    ],
    answer: "Linear Regression",
    topic: "AI / ML",
  },
  {
    question: "What is supervised learning?",
    options: [
      "Learning without data",
      "Learning using labeled data",
      "Learning without a model",
      "Learning only from images",
    ],
    answer: "Learning using labeled data",
    topic: "AI / ML",
  },
  {
    question: "Which keyword declares a variable in JavaScript?",
    options: ["var", "define", "variable", "declare"],
    answer: "var",
    topic: "JavaScript",
  },
  {
    question: "Which symbol is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: "===",
    topic: "JavaScript",
  },
  {
    question: "Which language runs directly in a web browser?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
    topic: "JavaScript",
  },
];

function Quiz({ onQuizComplete }) {
  const [questions, setQuestions] = useState(() =>
    [...questionBank].sort(() => Math.random() - 0.5).slice(0, 5)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizResults, setQuizResults] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    const result = {
      topic: question.topic,
      question: question.question,
      selectedAnswer: option,
      correctAnswer: question.answer,
      correct: option === question.answer,
      date: new Date().toISOString(),
    };

    const updatedResults = [...quizResults, result];

    setQuizResults(updatedResults);

    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setShowResult(true);

        // IMPORTANT:
        // Send the complete results including the final answer.
        if (onQuizComplete) {
          onQuizComplete(updatedResults);
        }
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer("");
      }
    }, 500);
  };

  const restartQuiz = () => {
    setQuestions(
      [...questionBank]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
    );

    setCurrentQuestion(0);
    setSelectedAnswer("");
    setQuizResults([]);
    setShowResult(false);
  };

  if (showResult) {
    const correct = quizResults.filter(
      (result) => result.correct
    ).length;

    const score = Math.round(
      (correct / quizResults.length) * 100
    );

    return (
      <div className="quiz-page">
        <div className="quiz-result-card">
          <div className="quiz-result-icon">
            {score >= 80
              ? "🏆"
              : score >= 60
              ? "🎉"
              : "💪"}
          </div>

          <p className="page-label">Quiz Complete</p>

          <h1>Your Score</h1>

          <div className="quiz-score">
            {score}%
          </div>

          <p>
            You answered{" "}
            <strong>{correct}</strong> out of{" "}
            <strong>{quizResults.length}</strong>{" "}
            questions correctly.
          </p>

          {score >= 80 && (
            <div className="quiz-message">
              🌟 Excellent! You're mastering these concepts.
            </div>
          )}

          {score >= 60 && score < 80 && (
            <div className="quiz-message">
              👍 Good work! A little more practice will make you stronger.
            </div>
          )}

          {score < 60 && (
            <div className="quiz-message">
              🧠 Don't worry! StudyTwin will help you improve your weak areas.
            </div>
          )}

          <button
            className="quiz-restart-button"
            onClick={restartQuiz}
          >
            🔄 Take Another Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <div>
          <p className="page-label">StudyTwin Challenge</p>
          <h1>🧠 Test Yourself</h1>
        </div>

        <div className="quiz-counter">
          {currentQuestion + 1}/{questions.length}
        </div>
      </div>

      <div className="quiz-progress">
        <div
          style={{
            width: `${
              ((currentQuestion + 1) / questions.length) * 100
            }%`,
          }}
        ></div>
      </div>

      <div className="quiz-card">
        <span className="quiz-topic">
          {question.topic}
        </span>

        <h2>{question.question}</h2>

        <div className="quiz-options">
          {question.options.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect =
              selectedAnswer &&
              option === question.answer;

            const isWrong =
              isSelected &&
              option !== question.answer;

            return (
              <button
                key={option}
                className={`quiz-option ${
                  isCorrect ? "correct" : ""
                } ${isWrong ? "wrong" : ""} ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => handleAnswer(option)}
              >
                <span>
                  {option}
                </span>

                {isCorrect && "✓"}
                {isWrong && "✕"}
              </button>
            );
          })}
        </div>
      </div>

      <div className="quiz-tip">
        💡 <strong>StudyTwin Tip:</strong> Your answers help StudyTwin understand which topics you need to practice more.
      </div>
    </div>
  );
}

export default Quiz;