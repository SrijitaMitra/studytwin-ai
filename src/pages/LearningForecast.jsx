import { useMemo } from "react";
import "./LearningForecast.css";

function LearningForecast({ quizResults = [] }) {
  const learningResults = JSON.parse(
    localStorage.getItem("studytwin_learning_results") || "[]"
  );

  const profile = JSON.parse(
    localStorage.getItem("studytwin_profile") ||
      '{"name":"Student","dailyGoal":60,"level":"Intermediate"}'
  );

  const forecast = useMemo(() => {
    const allResults = [
      ...quizResults,
      ...learningResults,
    ];

    const total = allResults.length;

    const correct = allResults.filter(
      (item) => item.correct
    ).length;

    const currentScore =
      total > 0
        ? Math.round((correct / total) * 100)
        : 55;

    // Simulate improvement over the next 7 days.
    const dailyMinutes = Number(profile.dailyGoal) || 60;

    const studyFactor = Math.min(
      18,
      Math.round(dailyMinutes / 15)
    );

    const predictedScore = Math.min(
      98,
      currentScore + 10 + studyFactor
    );

    const topicMap = {};

    allResults.forEach((item) => {
      if (!item.topic) return;

      if (!topicMap[item.topic]) {
        topicMap[item.topic] = {
          correct: 0,
          total: 0,
        };
      }

      topicMap[item.topic].total += 1;

      if (item.correct) {
        topicMap[item.topic].correct += 1;
      }
    });

    const topics = Object.entries(topicMap).map(
      ([name, data]) => ({
        name,
        score: Math.round(
          (data.correct / data.total) * 100
        ),
      })
    );

    const sortedTopics = [...topics].sort(
      (a, b) => a.score - b.score
    );

    const weakestTopic =
      sortedTopics[0]?.name || "DBMS";

    const strongestTopic =
      [...topics].sort(
        (a, b) => b.score - a.score
      )[0]?.name || "Python";

    const readiness = Math.min(
      98,
      Math.round(
        predictedScore * 0.8 +
          Math.min(total * 2, 20)
      )
    );

    let risk = "Low";

    if (currentScore < 50) {
      risk = "High";
    } else if (currentScore < 70) {
      risk = "Medium";
    }

    return {
      currentScore,
      predictedScore,
      readiness,
      weakestTopic,
      strongestTopic,
      risk,
      dailyMinutes,
      topics,
      total,
    };
  }, [quizResults, learningResults, profile]);

  const getForecastMessage = () => {
    if (forecast.currentScore < 50) {
      return `Your biggest opportunity is ${forecast.weakestTopic}. Consistent practice could significantly improve your score over the next 7 days.`;
    }

    if (forecast.currentScore < 75) {
      return `You're building a solid foundation. Focus on ${forecast.weakestTopic} while continuing to strengthen ${forecast.strongestTopic}.`;
    }

    return `You're performing strongly. StudyTwin predicts that advanced practice could push you toward exam-ready performance.`;
  };

  return (
    <div className="forecast-page">

      {/* Header */}
      <div className="forecast-header">
        <div>
          <p className="forecast-label">
            StudyTwin Intelligence
          </p>

          <h1>🔮 Learning Time Machine</h1>

          <p>
            See where your learning could take you next.
          </p>
        </div>

        <div className="forecast-orb">
          🔮
        </div>
      </div>

      {/* Main prediction */}
      <div className="forecast-hero">

        <div className="forecast-hero-content">

          <span className="forecast-badge">
            ✨ 7-Day Prediction
          </span>

          <h2>
            Your learning trajectory
          </h2>

          <p>
            Based on your current performance and
            study habits, StudyTwin estimates your
            future progress.
          </p>

        </div>

        <div className="forecast-score">

          <div className="score-ring">
            <span>
              {forecast.predictedScore}%
            </span>
          </div>

          <small>
            predicted knowledge
          </small>

        </div>

      </div>

      {/* Before → After */}
      <div className="forecast-section">

        <h2>📈 Your Possible Growth</h2>

        <div className="growth-card">

          <div className="growth-side">
            <span>Today</span>
            <strong>
              {forecast.currentScore}%
            </strong>
            <small>Knowledge</small>
          </div>

          <div className="growth-arrow">
            →
          </div>

          <div className="growth-side future">
            <span>In 7 Days</span>
            <strong>
              {forecast.predictedScore}%
            </strong>
            <small>Predicted</small>
          </div>

        </div>

      </div>

      {/* Prediction cards */}
      <div className="forecast-grid">

        <div className="forecast-card">
          <span className="forecast-card-icon">
            🎯
          </span>

          <small>Exam Readiness</small>

          <strong>
            {forecast.readiness}%
          </strong>

          <p>
            predicted readiness
          </p>
        </div>

        <div className="forecast-card">
          <span className="forecast-card-icon">
            ⏱️
          </span>

          <small>Daily Focus</small>

          <strong>
            {forecast.dailyMinutes}m
          </strong>

          <p>
            recommended daily
          </p>
        </div>

        <div className="forecast-card">
          <span className="forecast-card-icon">
            ⚠️
          </span>

          <small>Learning Risk</small>

          <strong>
            {forecast.risk}
          </strong>

          <p>
            based on performance
          </p>
        </div>

      </div>

      {/* Topic forecast */}
      <div className="forecast-section">

        <div className="section-heading">
          <div>
            <p className="forecast-label">
              Topic Intelligence
            </p>

            <h2>🧠 Where you're heading</h2>
          </div>
        </div>

        {forecast.topics.length === 0 ? (
          <div className="forecast-empty">
            <div>📚</div>

            <h3>Not enough learning data yet</h3>

            <p>
              Complete quizzes and knowledge checks
              so StudyTwin can create a more accurate
              prediction.
            </p>
          </div>
        ) : (
          <div className="forecast-topics">

            {forecast.topics.map((topic) => {

              const predictedTopicScore = Math.min(
                98,
                topic.score +
                  Math.round(
                    (forecast.dailyMinutes / 20) + 8
                  )
              );

              return (
                <div
                  className="forecast-topic"
                  key={topic.name}
                >

                  <div className="forecast-topic-top">

                    <div>
                      <strong>
                        {topic.name}
                      </strong>

                      <span>
                        {topic.score < 60
                          ? "Needs attention"
                          : topic.score >= 80
                          ? "Strong"
                          : "Developing"}
                      </span>
                    </div>

                    <div className="topic-prediction">
                      {topic.score}% →{" "}
                      <strong>
                        {predictedTopicScore}%
                      </strong>
                    </div>

                  </div>

                  <div className="forecast-progress">

                    <div
                      className="current-progress"
                      style={{
                        width: `${topic.score}%`,
                      }}
                    ></div>

                  </div>

                  <div className="forecast-mini-text">
                    7-day potential:
                    {" "}
                    {predictedTopicScore}%
                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>

      {/* Weak area */}
      <div className="forecast-risk">

        <div className="risk-icon">
          ⚠️
        </div>

        <div>
          <span>Biggest Opportunity</span>

          <h3>
            Improve {forecast.weakestTopic}
          </h3>

          <p>
            Spending focused study time here could
            create the biggest improvement in your
            overall learning score.
          </p>
        </div>

      </div>

      {/* AI prediction */}
      <div className="forecast-ai">

        <div className="ai-icon">
          🤖
        </div>

        <div>

          <span>StudyTwin Forecast</span>

          <p>
            “{getForecastMessage()}”
          </p>

        </div>

      </div>

      {/* Formula explanation */}
      <div className="forecast-info">

        <h3>
          🔬 How does this prediction work?
        </h3>

        <p>
          StudyTwin combines your quiz performance,
          knowledge checks, learning topics and daily
          study goal to estimate your possible
          improvement. This is a learning simulation,
          not a guaranteed exam score.
        </p>

      </div>

    </div>
  );
}

export default LearningForecast;