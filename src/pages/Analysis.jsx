import "./Analysis.css";

function Analysis({ quizResults }) {

  // If the user has not taken a quiz yet
  if (!quizResults || quizResults.length === 0) {
    return (
      <div className="analysis-page">

        <div className="analysis-header">

          <p className="page-label">
            StudyTwin Intelligence
          </p>

          <h1>
            🧠 Learning Analysis
          </h1>

          <p className="analysis-subtitle">
            StudyTwin will analyze your quiz
            performance and discover your strengths
            and weaknesses.
          </p>

        </div>


        <div className="empty-analysis">

          <div className="empty-icon">
            🧠
          </div>

          <h2>
            Your StudyTwin is waiting!
          </h2>

          <p>
            Take your first quiz to allow
            StudyTwin to understand how you learn.
          </p>

          <div className="empty-info">

            <div>
              📝
              <span>
                Take a quiz
              </span>
            </div>

            <div>
              📊
              <span>
                Analyze performance
              </span>
            </div>

            <div>
              🎯
              <span>
                Find weak topics
              </span>
            </div>

          </div>

        </div>

      </div>
    );
  }


  // =========================
  // CALCULATE OVERALL SCORE
  // =========================

  const correctAnswers =
    quizResults.filter(
      (result) => result.correct
    ).length;

  const totalQuestions =
    quizResults.length;

  const overallScore = Math.round(
    (correctAnswers / totalQuestions) * 100
  );


  // =========================
  // CALCULATE TOPIC SCORES
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


  const topics = Object.entries(
    topicMap
  ).map(([name, data]) => {

    const score = Math.round(
      (data.correct / data.total) * 100
    );


    let status = "Good";

    let icon = "🟡";


    if (score < 60) {

      status = "Weak";

      icon = "🔴";

    } else if (score >= 80) {

      status = "Strong";

      icon = "🟢";

    }


    return {
      name,
      score,
      status,
      icon,
      correct: data.correct,
      total: data.total,
    };

  });


  // =========================
  // SORT TOPICS
  // LOWEST SCORE FIRST
  // =========================

  const sortedTopics = [...topics].sort(
    (a, b) => a.score - b.score
  );


  // Weak topics
  const weakTopics = topics.filter(
    (topic) => topic.score < 60
  );


  // Strong topics
  const strongTopics = topics.filter(
    (topic) => topic.score >= 80
  );


  // Weakest topic
  const weakestTopic =
    sortedTopics[0];


  // =========================
  // PERSONALIZED MESSAGE
  // =========================

  let recommendation = "";

  if (weakestTopic.score < 60) {

    recommendation = `Based on your quiz performance, StudyTwin recommends spending 20 minutes practicing ${weakestTopic.name} today.`;

  } else if (overallScore >= 80) {

    recommendation =
      "Excellent performance! StudyTwin recommends challenging yourself with more advanced questions.";

  } else {

    recommendation =
      "You are making good progress. Continue practicing your weaker areas to improve your overall score.";

  }


  return (

    <div className="analysis-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="analysis-header">

        <p className="page-label">
          StudyTwin Intelligence
        </p>

        <h1>
          🧠 Learning Analysis
        </h1>

        <p className="analysis-subtitle">
          StudyTwin analyzed your latest quiz
          performance to understand how you learn.
        </p>

      </div>


      {/* =========================
          OVERALL SCORE
      ========================= */}

      <div className="overall-card">

        <div className="overall-icon">
          🧠
        </div>

        <div>

          <span>
            Overall Learning Score
          </span>

          <strong>
            {overallScore}%
          </strong>

        </div>

      </div>


      {/* =========================
          PERFORMANCE SUMMARY
      ========================= */}

      <div className="summary-grid">

        <div className="summary-card">

          <span>
            📝
          </span>

          <strong>
            {totalQuestions}
          </strong>

          <small>
            Questions
          </small>

        </div>


        <div className="summary-card">

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


        <div className="summary-card">

          <span>
            🎯
          </span>

          <strong>
            {weakTopics.length}
          </strong>

          <small>
            Weak Topics
          </small>

        </div>

      </div>


      {/* =========================
          FOCUS AREAS
      ========================= */}

      <section className="analysis-section">

        <div className="section-title">

          <h2>
            🎯 Focus Areas
          </h2>

          <span>
            {weakTopics.length} topic
            {weakTopics.length !== 1
              ? "s"
              : ""}
          </span>

        </div>


        {weakTopics.length > 0 ? (

          weakTopics.map((topic) => (

            <div
              className="weak-topic-card"
              key={topic.name}
            >

              <div className="topic-icon">
                {topic.icon}
              </div>


              <div className="topic-details">

                <h3>
                  {topic.name}
                </h3>

                <p>
                  {topic.correct} out of{" "}
                  {topic.total} questions
                  correct.
                </p>


                <div className="analysis-progress">

                  <div
                    style={{
                      width: `${topic.score}%`,
                    }}
                  ></div>

                </div>

              </div>


              <strong>
                {topic.score}%
              </strong>

            </div>

          ))

        ) : (

          <div className="no-weak-topics">

            🎉 Great! StudyTwin did not
            detect any weak topic.

          </div>

        )}

      </section>


      {/* =========================
          STRONG AREAS
      ========================= */}

      {strongTopics.length > 0 && (

        <section className="analysis-section">

          <div className="section-title">

            <h2>
              💪 Your Strengths
            </h2>

          </div>


          <div className="strength-list">

            {strongTopics.map((topic) => (

              <div
                className="strength-item"
                key={topic.name}
              >

                <span>
                  {topic.icon}
                </span>

                <div>

                  <strong>
                    {topic.name}
                  </strong>

                  <p>
                    Excellent performance
                  </p>

                </div>

                <strong>
                  {topic.score}%
                </strong>

              </div>

            ))}

          </div>

        </section>

      )}


      {/* =========================
          ALL TOPIC PERFORMANCE
      ========================= */}

      <section className="analysis-section">

        <div className="section-title">

          <h2>
            📊 Topic Performance
          </h2>

        </div>


        <div className="performance-list">

          {sortedTopics.map((topic) => (

            <div
              className="performance-item"
              key={topic.name}
            >

              <div className="performance-name">

                <span>
                  {topic.icon}
                </span>

                <strong>
                  {topic.name}
                </strong>

              </div>


              <div className="performance-bar">

                <div
                  style={{
                    width: `${topic.score}%`,
                  }}
                ></div>

              </div>


              <strong>
                {topic.score}%
              </strong>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          STUDYTWIN RECOMMENDATION
      ========================= */}

      <section className="recommendation-card">

        <div className="recommendation-icon">
          🤖
        </div>


        <div>

          <p>
            StudyTwin Recommendation
          </p>

          <h2>
            {weakestTopic.score < 60
              ? `Focus on ${weakestTopic.name}`
              : "Keep improving your skills"}
          </h2>

          <span>
            {recommendation}
          </span>

        </div>

      </section>


      {/* =========================
          PERSONALIZED STUDY PLAN
      ========================= */}

      <section className="study-plan">

        <h2>
          📚 Your Suggested Study Plan
        </h2>


        {weakestTopic.score < 60 ? (

          <>

            <div className="plan-item">

              <span>
                1
              </span>

              <div>

                <strong>
                  Review {weakestTopic.name}
                </strong>

                <p>
                  10 minutes
                </p>

              </div>

            </div>


            <div className="plan-item">

              <span>
                2
              </span>

              <div>

                <strong>
                  Practice 5 questions
                </strong>

                <p>
                  15 minutes
                </p>

              </div>

            </div>


            <div className="plan-item">

              <span>
                3
              </span>

              <div>

                <strong>
                  Take another mini quiz
                </strong>

                <p>
                  5 minutes
                </p>

              </div>

            </div>

          </>

        ) : (

          <>

            <div className="plan-item">

              <span>
                1
              </span>

              <div>

                <strong>
                  Review your learning topics
                </strong>

                <p>
                  10 minutes
                </p>

              </div>

            </div>


            <div className="plan-item">

              <span>
                2
              </span>

              <div>

                <strong>
                  Practice advanced questions
                </strong>

                <p>
                  15 minutes
                </p>

              </div>

            </div>


            <div className="plan-item">

              <span>
                3
              </span>

              <div>

                <strong>
                  Take another quiz
                </strong>

                <p>
                  5 minutes
                </p>

              </div>

            </div>

          </>

        )}

      </section>


    </div>
  );
}

export default Analysis;