import { useMemo, useState } from "react";
import "./ExamReadiness.css";

function ExamReadiness({ quizResults = [] }) {
  const [examDays, setExamDays] = useState(7);
  const [selectedSubject, setSelectedSubject] =
    useState("All Subjects");

  const learningResults = useMemo(() => {
    const saved = localStorage.getItem(
      "studytwin_learning_results"
    );

    return saved ? JSON.parse(saved) : [];
  }, []);

  const subjects = useMemo(() => {
    const names = new Set();

    quizResults.forEach((result) => {
      if (result.topic) {
        names.add(result.topic);
      }
    });

    learningResults.forEach((result) => {
      if (result.topic) {
        names.add(result.topic);
      }
    });

    return ["All Subjects", ...names];
  }, [quizResults, learningResults]);

  const filteredQuizResults =
    selectedSubject === "All Subjects"
      ? quizResults
      : quizResults.filter(
          (result) =>
            result.topic === selectedSubject
        );

  const filteredLearningResults =
    selectedSubject === "All Subjects"
      ? learningResults
      : learningResults.filter(
          (result) =>
            result.topic === selectedSubject
        );

  const allResults = [
    ...filteredQuizResults,
    ...filteredLearningResults,
  ];

  const overallScore =
    allResults.length > 0
      ? Math.round(
          (allResults.filter(
            (result) => result.correct
          ).length /
            allResults.length) *
            100
        )
      : 0;

  const topicData = useMemo(() => {
    const map = {};

    allResults.forEach((result) => {
      if (!map[result.topic]) {
        map[result.topic] = {
          correct: 0,
          total: 0,
        };
      }

      map[result.topic].total += 1;

      if (result.correct) {
        map[result.topic].correct += 1;
      }
    });

    return Object.entries(map)
      .map(([name, data]) => ({
        name,
        score: Math.round(
          (data.correct / data.total) * 100
        ),
        total: data.total,
      }))
      .sort((a, b) => a.score - b.score);
  }, [allResults]);

  const weakestTopic =
    topicData.length > 0
      ? topicData[0]
      : null;

  const strongestTopic =
    topicData.length > 0
      ? topicData[topicData.length - 1]
      : null;

  const readiness = Math.min(
    100,
    Math.round(
      overallScore * 0.7 +
        Math.min(allResults.length * 3, 30)
    )
  );

  let status = "Needs Work";
  let statusIcon = "🔴";
  let statusText =
    "You need more preparation before the exam.";

  if (readiness >= 80) {
    status = "Exam Ready";
    statusIcon = "🟢";
    statusText =
      "Excellent! You are showing strong exam readiness.";
  } else if (readiness >= 60) {
    status = "Almost Ready";
    statusIcon = "🟡";
    statusText =
      "You are close. Focus on your weaker topics.";
  }

  const estimatedMinutes =
    weakestTopic && weakestTopic.score < 60
      ? 65
      : readiness < 80
      ? 45
      : 25;

  const getStrategy = () => {
    if (!allResults.length) {
      return "Take your first quiz and complete a knowledge check. StudyTwin needs some learning data before it can estimate your exam readiness.";
    }

    if (readiness >= 80) {
      return `You're in a strong position. Spend your remaining time revising ${strongestTopic?.name || "your strongest topics"} and solving mixed mock questions.`;
    }

    if (weakestTopic) {
      return `Prioritize ${weakestTopic.name}. Review the core concepts first, then solve practice questions without looking at your notes.`;
    }

    return "Continue practicing your weaker areas and complete another mock test.";
  };

  return (
    <div className="exam-page">

      {/* HEADER */}

      <div className="exam-header">

        <p className="page-label">
          Smart Exam Preparation
        </p>

        <h1>
          🎯 Exam Readiness
        </h1>

        <p>
          StudyTwin estimates how prepared you
          are using your learning performance.
        </p>

      </div>


      {/* SETTINGS */}

      <section className="exam-settings">

        <div>

          <label>
            EXAM IN
          </label>

          <select
            value={examDays}
            onChange={(e) =>
              setExamDays(
                Number(e.target.value)
              )
            }
          >
            <option value={1}>
              Tomorrow
            </option>

            <option value={3}>
              3 Days
            </option>

            <option value={7}>
              1 Week
            </option>

            <option value={14}>
              2 Weeks
            </option>

            <option value={30}>
              1 Month
            </option>
          </select>

        </div>


        <div>

          <label>
            SUBJECT
          </label>

          <select
            value={selectedSubject}
            onChange={(e) =>
              setSelectedSubject(
                e.target.value
              )
            }
          >
            {subjects.map((subject) => (
              <option
                key={subject}
                value={subject}
              >
                {subject}
              </option>
            ))}
          </select>

        </div>

      </section>


      {/* READINESS SCORE */}

      <section className="readiness-card">

        <div
  className="readiness-circle"
  style={{
    "--score": readiness,
  }}
>

          <div>

            <strong>
              {readiness}%
            </strong>

            <span>
              Ready
            </span>

          </div>

        </div>

        <div className="readiness-info">

          <span className="status">
            {statusIcon} {status}
          </span>

          <h2>
            {status}
          </h2>

          <p>
            {statusText}
          </p>

        </div>

      </section>


      {/* QUICK STATS */}

      <section className="exam-stats">

        <div>

          <strong>
            {overallScore}%
          </strong>

          <span>
            Knowledge Score
          </span>

        </div>

        <div>

          <strong>
            {allResults.length}
          </strong>

          <span>
            Questions Tested
          </span>

        </div>

        <div>

          <strong>
            {estimatedMinutes}m
          </strong>

          <span>
            Recommended Today
          </span>

        </div>

      </section>


      {/* TOPIC READINESS */}

      <section className="exam-section">

        <div className="exam-section-title">

          <h2>
            📚 Topic Readiness
          </h2>

          <span>
            {topicData.length} topics
          </span>

        </div>


        {topicData.length === 0 ? (

          <div className="exam-empty">

            <span>
              📊
            </span>

            <h3>
              Not enough data yet
            </h3>

            <p>
              Complete a quiz or knowledge check
              to calculate your readiness.
            </p>

          </div>

        ) : (

          <div className="topic-readiness-list">

            {topicData.map((topic) => (

              <div
                className="topic-readiness"
                key={topic.name}
              >

                <div className="topic-readiness-top">

                  <strong>
                    {topic.name}
                  </strong>

                  <span>
                    {topic.score}%
                  </span>

                </div>

                <div className="topic-bar">

                  <div
                    style={{
                      width:
                        `${topic.score}%`,
                    }}
                  ></div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>


      {/* RISK CARD */}

      <section className="risk-card">

        <div className="risk-icon">
          ⚠️
        </div>

        <div>

          <small>
            BIGGEST EXAM RISK
          </small>

          <h3>
            {weakestTopic
              ? weakestTopic.name
              : "Not enough data"}
          </h3>

          <p>
            {weakestTopic
              ? `${weakestTopic.score}% performance. Review this topic before your exam.`
              : "Complete some learning activities first."}
          </p>

        </div>

      </section>


      {/* AI STRATEGY */}

      <section className="exam-ai">

        <div className="exam-ai-icon">
          🤖
        </div>

        <div>

          <strong>
            StudyTwin Exam Strategy
          </strong>

          <p>
            {getStrategy()}
          </p>

        </div>

      </section>


      {/* COUNTDOWN */}

      <section className="countdown-card">

        <span>
          ⏳
        </span>

        <div>

          <strong>
            {examDays === 1
              ? "Your exam is tomorrow!"
              : `${examDays} days until your exam`}
          </strong>

          <p>
            StudyTwin will prioritize your
            weaker areas during this period.
          </p>

        </div>

      </section>

    </div>
  );
}

export default ExamReadiness;