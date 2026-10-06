import { useState } from "react";
import "./Learning.css";

function Learning() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const [completedTopics, setCompletedTopics] = useState(() => {
    const saved = localStorage.getItem(
      "studytwin_completed_topics"
    );

    return saved ? JSON.parse(saved) : [];
  });

  const topics = [
    {
      id: 1,
      subject: "Python",
      icon: "🐍",
      level: "Beginner → Intermediate",

      description:
        "Learn Python fundamentals, functions, data structures and object-oriented programming.",

      concepts: [
        "Variables and Data Types",
        "Conditions and Loops",
        "Functions",
        "Lists, Tuples and Dictionaries",
        "Object-Oriented Programming",
      ],

      example:
        "Python is widely used in AI, machine learning, automation, data science and backend development.",

      interview:
        "Python is dynamically typed, interpreted and supports object-oriented, procedural and functional programming.",

      revision:
        "Remember: variables store data, functions organize reusable logic, and data structures organize information.",

      question:
        "Which of the following is used to define a function in Python?",

      options: [
        "function",
        "def",
        "func",
        "define",
      ],

      answer: "def",
    },

    {
      id: 2,
      subject: "JavaScript",
      icon: "⚡",
      level: "Beginner → Intermediate",

      description:
        "Understand JavaScript fundamentals and how modern web applications work.",

      concepts: [
        "Variables: let, const and var",
        "Functions",
        "Arrays and Objects",
        "DOM Manipulation",
        "Promises and Async/Await",
      ],

      example:
        "JavaScript allows websites to become interactive and is also used with React and Node.js.",

      interview:
        "JavaScript is a dynamically typed programming language mainly used for web development.",

      revision:
        "Remember: JavaScript controls behaviour and interaction on web pages.",

      question:
        "Which keyword is commonly used to declare a variable that cannot be reassigned?",

      options: [
        "var",
        "let",
        "const",
        "static",
      ],

      answer: "const",
    },

    {
      id: 3,
      subject: "AI / ML",
      icon: "🤖",
      level: "Intermediate",

      description:
        "Learn the foundations of Artificial Intelligence and Machine Learning.",

      concepts: [
        "Artificial Intelligence",
        "Machine Learning",
        "Supervised Learning",
        "Unsupervised Learning",
        "Model Training and Evaluation",
      ],

      example:
        "A spam detection system can learn from previously classified emails and predict whether a new email is spam.",

      interview:
        "Machine Learning is a subset of AI where systems learn patterns from data to make predictions or decisions.",

      revision:
        "Remember: Data → Training → Model → Prediction → Evaluation.",

      question:
        "Which type of machine learning uses labelled training data?",

      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Random Learning",
      ],

      answer: "Supervised Learning",
    },

    {
      id: 4,
      subject: "DBMS",
      icon: "🗄️",
      level: "Beginner → Intermediate",

      description:
        "Understand how databases store, organize and retrieve information.",

      concepts: [
        "Database and Tables",
        "Primary Key",
        "Foreign Key",
        "SQL Queries",
        "Normalization",
      ],

      example:
        "A student management system can store student information in tables and retrieve it using SQL queries.",

      interview:
        "DBMS is software used to create, manage, store and retrieve data from databases.",

      revision:
        "Remember: Tables store data, keys identify relationships, and SQL retrieves or modifies data.",

      question:
        "Which key uniquely identifies each record in a database table?",

      options: [
        "Foreign Key",
        "Primary Key",
        "Candidate Value",
        "Normal Key",
      ],

      answer: "Primary Key",
    },
  ];

  /* -----------------------------
     MARK TOPIC COMPLETE
  ----------------------------- */

  const markComplete = (topicId) => {
    let updated;

    if (completedTopics.includes(topicId)) {
      updated = completedTopics.filter(
        (id) => id !== topicId
      );
    } else {
      updated = [...completedTopics, topicId];
    }

    setCompletedTopics(updated);

    localStorage.setItem(
      "studytwin_completed_topics",
      JSON.stringify(updated)
    );
  };


  /* -----------------------------
     OPEN TOPIC
  ----------------------------- */

  const openTopic = (topic) => {
    setSelectedTopic(topic);
    setSelectedAnswer(null);
    setShowAnswer(false);
  };


  /* -----------------------------
     CHECK ANSWER
  ----------------------------- */

  const checkAnswer = (option) => {
    setSelectedAnswer(option);
    setShowAnswer(true);

    const isCorrect =
      option === selectedTopic.answer;

    const savedLearningResults =
      localStorage.getItem(
        "studytwin_learning_results"
      );

    const previousResults =
      savedLearningResults
        ? JSON.parse(savedLearningResults)
        : [];

    const newResult = {
      id: Date.now(),

      topic: selectedTopic.subject,

      question: selectedTopic.question,

      selectedAnswer: option,

      correctAnswer: selectedTopic.answer,

      correct: isCorrect,

      date: new Date().toISOString(),
    };

    localStorage.setItem(
      "studytwin_learning_results",
      JSON.stringify([
        ...previousResults,
        newResult,
      ])
    );
  };


  /* -----------------------------
     RESET QUESTION
  ----------------------------- */

  const resetQuestion = () => {
    setSelectedAnswer(null);
    setShowAnswer(false);
  };


  return (
    <div className="learning-page">

      {/* =========================
          HEADER
      ========================== */}

      <div className="learning-header">

        <p className="page-label">
          Knowledge Center
        </p>

        <h1>
          📚 Learn & Improve
        </h1>

        <p className="learning-subtitle">
          Build your knowledge with simple explanations,
          examples, interview concepts and self-tests.
        </p>

      </div>


      {/* =========================
          TOPIC LIST
      ========================== */}

      {!selectedTopic ? (

        <>

          {/* LEARNING PROGRESS */}

          <div className="learning-progress-card">

            <div>

              <span>
                🧠
              </span>

              <div>

                <strong>
                  {completedTopics.length}/
                  {topics.length}
                </strong>

                <p>
                  Topics completed
                </p>

              </div>

            </div>


            <div className="learning-progress-bar">

              <div
                style={{
                  width: `${
                    (completedTopics.length /
                      topics.length) *
                    100
                  }%`,
                }}
              ></div>

            </div>

          </div>


          {/* TOPIC HEADING */}

          <div className="topics-heading">

            <h2>
              Choose a topic
            </h2>

            <span>
              Learn at your own pace
            </span>

          </div>


          {/* TOPIC CARDS */}

          <div className="learning-topic-grid">

            {topics.map((topic) => {

              const completed =
                completedTopics.includes(
                  topic.id
                );

              return (

                <button
                  key={topic.id}
                  className="learning-topic-card"
                  onClick={() =>
                    openTopic(topic)
                  }
                >

                  <div className="topic-card-top">

                    <div className="topic-icon">
                      {topic.icon}
                    </div>

                    {completed && (

                      <span className="completed-badge">
                        ✓ Completed
                      </span>

                    )}

                  </div>


                  <h3>
                    {topic.subject}
                  </h3>


                  <span className="topic-level">
                    {topic.level}
                  </span>


                  <p>
                    {topic.description}
                  </p>


                  <div className="learn-button">

                    {completed
                      ? "Review Topic →"
                      : "Start Learning →"}

                  </div>

                </button>

              );

            })}

          </div>


          {/* KNOWLEDGE TIP */}

          <div className="knowledge-tip">

            <span>
              💡
            </span>

            <div>

              <strong>
                StudyTwin Tip
              </strong>

              <p>
                Don't just read. Learn a concept,
                understand an example, and then
                test yourself with a question.
              </p>

            </div>

          </div>

        </>

      ) : (

        /* =========================
           TOPIC DETAIL
        ========================== */

        <div className="topic-detail">

          {/* BACK BUTTON */}

          <button
            className="back-learning"
            onClick={() =>
              setSelectedTopic(null)
            }
          >
            ← Back to Topics
          </button>


          {/* TOPIC HEADER */}

          <div className="topic-detail-header">

            <div className="detail-icon">
              {selectedTopic.icon}
            </div>

            <div>

              <p className="page-label">
                {selectedTopic.level}
              </p>

              <h2>
                {selectedTopic.subject}
              </h2>

            </div>

          </div>


          {/* WHAT YOU WILL LEARN */}

          <section className="learning-section">

            <h3>
              📖 What You Will Learn
            </h3>

            <p>
              {selectedTopic.description}
            </p>

          </section>


          {/* KEY CONCEPTS */}

          <section className="learning-section">

            <h3>
              🧠 Key Concepts
            </h3>

            <div className="concept-list">

              {selectedTopic.concepts.map(
                (concept, index) => (

                  <div
                    className="concept-item"
                    key={index}
                  >

                    <span>
                      {index + 1}
                    </span>

                    <p>
                      {concept}
                    </p>

                  </div>

                )
              )}

            </div>

          </section>


          {/* REAL WORLD EXAMPLE */}

          <section className="learning-section example-section">

            <h3>
              🌍 Real-World Example
            </h3>

            <p>
              {selectedTopic.example}
            </p>

          </section>


          {/* INTERVIEW KNOWLEDGE */}

          <section className="learning-section interview-section">

            <h3>
              💼 Interview Knowledge
            </h3>

            <p>
              {selectedTopic.interview}
            </p>

          </section>


          {/* QUICK REVISION */}

          <section className="learning-section revision-section">

            <h3>
              ⚡ Quick Revision
            </h3>

            <p>
              {selectedTopic.revision}
            </p>

          </section>


          {/* =========================
              TEST YOURSELF
          ========================== */}

          <section className="learning-section test-section">

            <div className="test-title">

              <div>

                <span>
                  🧠
                </span>

                <div>

                  <h3>
                    Test Yourself
                  </h3>

                  <p>
                    Check whether you understood
                    this topic.
                  </p>

                </div>

              </div>

            </div>


            {/* QUESTION */}

            <h4 className="question-text">

              {selectedTopic.question}

            </h4>


            {/* OPTIONS */}

            <div className="quiz-options">

              {selectedTopic.options.map(
                (option) => {

                  let optionClass =
                    "quiz-option";


                  if (showAnswer) {

                    if (
                      option ===
                      selectedTopic.answer
                    ) {

                      optionClass +=
                        " correct-option";

                    } else if (
                      option ===
                      selectedAnswer
                    ) {

                      optionClass +=
                        " wrong-option";

                    }

                  } else if (
                    option ===
                    selectedAnswer
                  ) {

                    optionClass +=
                      " selected-option";

                  }


                  return (

                    <button
                      key={option}
                      className={optionClass}
                      onClick={() =>
                        checkAnswer(option)
                      }
                      disabled={showAnswer}
                    >

                      <span>
                        {option}
                      </span>


                      {showAnswer &&
                        option ===
                          selectedTopic.answer && (

                          <strong>
                            ✓
                          </strong>

                        )}


                      {showAnswer &&
                        option ===
                          selectedAnswer &&
                        option !==
                          selectedTopic.answer && (

                          <strong>
                            ✕
                          </strong>

                        )}

                    </button>

                  );

                }
              )}

            </div>


            {/* ANSWER FEEDBACK */}

            {showAnswer && (

              <div
                className={
                  selectedAnswer ===
                  selectedTopic.answer
                    ? "answer-feedback correct-feedback"
                    : "answer-feedback wrong-feedback"
                }
              >

                {selectedAnswer ===
                selectedTopic.answer ? (

                  <>

                    <strong>
                      🎉 Correct!
                    </strong>

                    <p>
                      Great job! You understood
                      this concept.
                    </p>

                  </>

                ) : (

                  <>

                    <strong>
                      ❌ Not quite!
                    </strong>

                    <p>

                      The correct answer is:

                      <b>
                        {" "}
                        {selectedTopic.answer}
                      </b>

                    </p>

                  </>

                )}

              </div>

            )}


            {/* TRY AGAIN */}

            {showAnswer && (

              <button
                className="retry-question-button"
                onClick={resetQuestion}
              >
                🔄 Try Again
              </button>

            )}

          </section>


          {/* =========================
              COMPLETE TOPIC
          ========================== */}

          <button
            className="complete-topic-button"
            onClick={() =>
              markComplete(
                selectedTopic.id
              )
            }
          >

            {completedTopics.includes(
              selectedTopic.id
            )
              ? "✓ Marked as Completed"
              : "✓ I Understand This Topic"}

          </button>


          {/* =========================
              STUDYTWIN CONNECTION
          ========================== */}

          <div className="learning-twin-message">

            <span>
              🤖
            </span>

            <div>

              <strong>
                StudyTwin is learning from you
              </strong>

              <p>
                Your answers are saved as learning
                activity. As you test yourself on
                more topics, StudyTwin can understand
                your strengths and areas that need
                more practice.
              </p>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Learning;