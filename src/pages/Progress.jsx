import "./Progress.css";

function Progress({ quizResults }) {

  // =========================
  // BASIC STATISTICS
  // =========================

  const totalQuestions = quizResults.length;

  const correctAnswers = quizResults.filter(
    (result) => result.correct
  ).length;

  const overallScore =
    totalQuestions > 0
      ? Math.round(
          (correctAnswers / totalQuestions) * 100
        )
      : 0;


  // =========================
  // GROUP RESULTS BY QUIZ
  // =========================

  const quizHistory = [];

  for (
    let i = 0;
    i < quizResults.length;
    i += 5
  ) {
    const quiz = quizResults.slice(i, i + 5);

    if (quiz.length === 0) {
      continue;
    }

    const correct = quiz.filter(
      (result) => result.correct
    ).length;

    const score = Math.round(
      (correct / quiz.length) * 100
    );

    quizHistory.push({
      quizNumber:
        quizHistory.length + 1,
      score,
      correct,
      total: quiz.length,
    });
  }


  // =========================
  // TOPIC PERFORMANCE
  // =========================

  const topicMap = {};

  quizResults.forEach((result) => {

    if (!topicMap[result.topic]) {
      topicMap[result.topic] = {
        correct: 0,
        total: 0,
      };
    }

    topicMap[result.topic].total += 1;

    if (result.correct) {
      topicMap[result.topic].correct += 1;
    }

  });


  const topicPerformance =
    Object.entries(topicMap)
      .map(([name, data]) => ({
        name,
        score: Math.round(
          (data.correct / data.total) * 100
        ),
      }))
      .sort((a, b) => b.score - a.score);


  // =========================
  // NO QUIZ STATE
  // =========================

  if (quizResults.length === 0) {

    return (
      <div className="progress-page">

        <div className="progress-header">

          <p className="page-label">
            StudyTwin Tracking
          </p>

          <h1>
            📊 Learning Progress
          </h1>

          <p>
            Your learning progress will appear
            here after you complete your first quiz.
          </p>

        </div>


        <div className="progress-empty">

          <div>
            📈
          </div>

          <h2>
            Start your learning journey
          </h2>

          <p>
            Complete a quiz and StudyTwin will
            start tracking your performance.
          </p>

        </div>

      </div>
    );
  }


  return (
    <div className="progress-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="progress-header">

        <p className="page-label">
          StudyTwin Tracking
        </p>

        <h1>
          📊 Learning Progress
        </h1>

        <p>
          Track how your knowledge improves
          over time.
        </p>

      </div>


      {/* =========================
          OVERALL SCORE
      ========================= */}

      <div className="progress-main-card">

        <div className="progress-circle">

          <strong>
            {overallScore}%
          </strong>

          <span>
            Overall
          </span>

        </div>


        <div className="progress-main-info">

          <h2>
            Your Learning Score
          </h2>

          <p>
            {overallScore >= 80
              ? "Excellent progress! Keep challenging yourself."
              : overallScore >= 60
              ? "Good progress! Keep practicing your weaker areas."
              : "Keep learning! Regular practice will improve your score."}
          </p>

        </div>

      </div>


      {/* =========================
          STATISTICS
      ========================= */}

      <div className="progress-stats">

        <div className="progress-stat">

          <span>
            📝
          </span>

          <strong>
            {quizHistory.length}
          </strong>

          <small>
            Quizzes
          </small>

        </div>


        <div className="progress-stat">

          <span>
            ❓
          </span>

          <strong>
            {totalQuestions}
          </strong>

          <small>
            Questions
          </small>

        </div>


        <div className="progress-stat">

          <span>
            ✅
          </span>

          <strong>
            {correctAnswers}
          </strong>

          <small>
            Correct
          </small>

        </div>


        <div className="progress-stat">

          <span>
            🎯
          </span>

          <strong>
            {topicPerformance.length}
          </strong>

          <small>
            Topics
          </small>

        </div>

      </div>


      {/* =========================
          STUDY STREAK
      ========================= */}

      <section className="streak-card">

        <div className="streak-icon">
          🔥
        </div>

        <div>

          <span>
            Current Study Streak
          </span>

          <strong>
            7 Days
          </strong>

        </div>

        <div className="streak-message">
          Keep going!
        </div>

      </section>


      {/* =========================
          QUIZ HISTORY
      ========================= */}

      <section className="progress-section">

        <div className="progress-section-title">

          <h2>
            📈 Quiz History
          </h2>

          <span>
            {quizHistory.length} quizzes
          </span>

        </div>


        <div className="quiz-history">

          {quizHistory.map((quiz) => (

            <div
              className="history-item"
              key={quiz.quizNumber}
            >

              <div className="history-number">

                <span>
                  {quiz.quizNumber}
                </span>

                <div>

                  <strong>
                    Quiz {quiz.quizNumber}
                  </strong>

                  <small>
                    {quiz.correct} / {quiz.total} correct
                  </small>

                </div>

              </div>


              <div className="history-progress">

                <div>

                  <div
                    style={{
                      width: `${quiz.score}%`,
                    }}
                  ></div>

                </div>

                <strong>
                  {quiz.score}%
                </strong>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          TOPIC PERFORMANCE
      ========================= */}

      <section className="progress-section">

        <div className="progress-section-title">

          <h2>
            🎯 Topic Performance
          </h2>

        </div>


        <div className="topic-performance">

          {topicPerformance.map((topic) => (

            <div
              className="topic-progress-item"
              key={topic.name}
            >

              <div className="topic-progress-header">

                <strong>
                  {topic.name}
                </strong>

                <span>
                  {topic.score}%
                </span>

              </div>


              <div className="topic-progress-bar">

                <div
                  style={{
                    width: `${topic.score}%`,
                  }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          STUDYTWIN MESSAGE
      ========================= */}

      <section className="progress-message">

        <span>
          🧠
        </span>

        <div>

          <strong>
            StudyTwin is learning about you
          </strong>

          <p>
            Every quiz helps StudyTwin understand
            your learning patterns and create
            better recommendations.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Progress;