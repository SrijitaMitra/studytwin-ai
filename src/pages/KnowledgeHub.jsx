import { useState } from "react";
import "./KnowledgeHub.css";
import learningMaterials from "../data/learningMaterials";

function KnowledgeHub() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] =
    useState("All");

  const subjects = [
    "All",
    ...new Set(
      learningMaterials.map(
        (material) => material.subject
      )
    ),
  ];

  const filteredMaterials =
    learningMaterials.filter((material) => {
      const matchesSearch =
        `${material.subject} ${material.title} ${material.shortDescription}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSubject =
        selectedSubject === "All" ||
        material.subject === selectedSubject;

      return matchesSearch && matchesSubject;
    });

  if (selectedTopic) {
    return (
      <div className="knowledge-page">

        <button
          className="back-button"
          onClick={() => setSelectedTopic(null)}
        >
          ← Back to Knowledge Hub
        </button>

        <article className="material-detail">

          <div className="material-detail-icon">
            {selectedTopic.icon}
          </div>

          <span className="material-subject">
            {selectedTopic.subject}
          </span>

          <h1>
            {selectedTopic.title}
          </h1>

          <span className="level-badge">
            {selectedTopic.level}
          </span>

          <p className="material-description">
            {selectedTopic.shortDescription}
          </p>


          {/* Explanation */}

          <section className="learning-section">

            <h2>
              📖 What is this?
            </h2>

            <div className="explanation-box">
              {selectedTopic.explanation
                .trim()
                .split("\n")
                .map((line, index) => (
                  <p key={index}>
                    {line}
                  </p>
                ))}
            </div>

          </section>


          {/* Key Points */}

          <section className="learning-section">

            <h2>
              🔑 Key Points
            </h2>

            <div className="concept-list">

              {selectedTopic.keyPoints.map(
                (point, index) => (
                  <div
                    className="concept-item"
                    key={index}
                  >
                    <span>✓</span>

                    <p>
                      {point}
                    </p>
                  </div>
                )
              )}

            </div>

          </section>


          {/* Concepts */}

          <section className="learning-section">

            <h2>
              🧠 Important Concepts
            </h2>

            <div className="concept-detail-list">

              {selectedTopic.concepts.map(
                (concept, index) => (
                  <div
                    className="concept-detail"
                    key={index}
                  >

                    <h3>
                      {index + 1}.{" "}
                      {concept.title}
                    </h3>

                    <p>
                      {concept.explanation}
                    </p>

                    <pre>
                      <code>
                        {concept.example}
                      </code>
                    </pre>

                  </div>
                )
              )}

            </div>

          </section>


          {/* Code / Flow */}

          {selectedTopic.code && (
            <section className="learning-section">

              <h2>
                💻 Example
              </h2>

              <pre className="code-block">
                <code>
                  {selectedTopic.code}
                </code>
              </pre>

            </section>
          )}


          {/* Real World */}

          <section className="learning-section">

            <h2>
              🌎 Real-World Use
            </h2>

            <div className="real-world-card">
              {selectedTopic.realWorld}
            </div>

          </section>


          {/* Common Mistakes */}

          <section className="learning-section">

            <h2>
              ⚠️ Common Mistakes
            </h2>

            <div className="mistakes-list">

              {selectedTopic.commonMistakes.map(
                (mistake, index) => (
                  <div
                    key={index}
                    className="mistake-item"
                  >
                    <span>!</span>

                    <p>
                      {mistake}
                    </p>
                  </div>
                )
              )}

            </div>

          </section>


          {/* Interview */}

          <section className="learning-section">

            <h2>
              💼 Interview Questions
            </h2>

            <div className="interview-list">

              {selectedTopic.interviewQuestions.map(
                (item, index) => (
                  <div
                    className="interview-card"
                    key={index}
                  >

                    <strong>
                      Q{index + 1}.{" "}
                      {item.question}
                    </strong>

                    <p>
                      <b>Answer:</b>{" "}
                      {item.answer}
                    </p>

                  </div>
                )
              )}

            </div>

          </section>


          {/* Quick Quiz */}

          <section className="learning-section">

            <h2>
              📝 Quick Knowledge Check
            </h2>

            <div className="quick-quiz">

              {selectedTopic.quiz.map(
                (question, index) => (
                  <div
                    className="quick-question"
                    key={index}
                  >

                    <h3>
                      {index + 1}.{" "}
                      {question.question}
                    </h3>

                    <div className="quiz-options">

                      {question.options.map(
                        (option) => (
                          <button
                            key={option}
                            onClick={(event) => {
                              const button =
                                event.currentTarget;

                              if (
                                option ===
                                question.answer
                              ) {
                                button.classList.add(
                                  "correct-answer"
                                );
                              } else {
                                button.classList.add(
                                  "wrong-answer"
                                );
                              }
                            }}
                          >
                            {option}
                          </button>
                        )
                      )}

                    </div>

                  </div>
                )
              )}

            </div>

          </section>


          {/* Remember */}

          <div className="remember-card">

            <span>
              🧠
            </span>

            <div>

              <strong>
                Key Takeaway
              </strong>

              <p>
                {selectedTopic.takeaway}
              </p>

            </div>

          </div>


          {/* StudyTwin */}

          <div className="knowledge-check">

            <span>
              🤖
            </span>

            <div>

              <strong>
                StudyTwin Recommendation
              </strong>

              <p>
                Study this concept carefully,
                test yourself with the quick
                questions, and then take a full
                quiz to measure your understanding.
              </p>

            </div>

          </div>

        </article>

      </div>
    );
  }


  return (
    <div className="knowledge-page">

      {/* Header */}

      <div className="knowledge-header">

        <p className="page-label">
          Learn Before You Test
        </p>

        <h1>
          📚 Knowledge Hub
        </h1>

        <p>
          Build strong technical knowledge with
          detailed explanations, examples and
          interview preparation.
        </p>

      </div>


      {/* Banner */}

      <div className="knowledge-banner">

        <div className="banner-icon">
          🧠
        </div>

        <div>

          <h2>
            Learn → Practice → Improve
          </h2>

          <p>
            Understand a concept first, practice
            it, then test your knowledge.
          </p>

        </div>

      </div>


      {/* Search */}

      <div className="search-box">

        <span>
          🔍
        </span>

        <input
          type="text"
          placeholder="Search Python, AI, DBMS..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>


      {/* Subject Filters */}

      <div className="subject-filters">

        {subjects.map((subject) => (

          <button
            key={subject}
            className={
              selectedSubject === subject
                ? "filter-active"
                : ""
            }
            onClick={() =>
              setSelectedSubject(subject)
            }
          >
            {subject}
          </button>

        ))}

      </div>


      <div className="material-count">

        {filteredMaterials.length} learning
        materials available

      </div>


      {/* Materials */}

      <div className="materials-grid">

        {filteredMaterials.map(
          (material) => (

            <button
              className="material-card"
              key={material.id}
              onClick={() =>
                setSelectedTopic(material)
              }
            >

              <div className="material-top">

                <div className="material-icon">
                  {material.icon}
                </div>

                <span className="level-badge">
                  {material.level}
                </span>

              </div>

              <span className="material-subject">
                {material.subject}
              </span>

              <h3>
                {material.title}
              </h3>

              <p>
                {material.shortDescription}
              </p>

              <div className="read-button">
                Start Learning →
              </div>

            </button>

          )
        )}

      </div>


      {filteredMaterials.length === 0 && (

        <div className="no-results">

          <span>
            🔎
          </span>

          <h3>
            No learning material found
          </h3>

          <p>
            Try another subject or search term.
          </p>

        </div>

      )}

    </div>
  );
}

export default KnowledgeHub;