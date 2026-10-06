import { useEffect, useMemo, useState } from "react";
import "./StudyPlan.css";

function StudyPlan({ quizResults }) {
  const [activeTask, setActiveTask] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(() => {
    const saved = localStorage.getItem(
      "studytwin_completed_tasks"
    );

    return saved ? JSON.parse(saved) : [];
  });

  const profile = useMemo(() => {
    const savedProfile = localStorage.getItem(
      "studytwin_profile"
    );

    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "Student",
          dailyGoal: 60,
          level: "Intermediate",
        };
  }, []);

  const topicPerformance = useMemo(() => {
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

    return Object.entries(topicMap)
      .map(([name, data]) => ({
        name,
        score: Math.round(
          (data.correct / data.total) * 100
        ),
      }))
      .sort((a, b) => a.score - b.score);
  }, [quizResults]);

  const dailyGoal = Number(
    profile.dailyGoal || 60
  );

  const weakestTopic =
    topicPerformance.length > 0
      ? topicPerformance[0]
      : null;

  const plan = [];

  if (weakestTopic) {
    const reviewTime = Math.round(
      dailyGoal * 0.4
    );

    const practiceTime = Math.round(
      dailyGoal * 0.35
    );

    const quizTime =
      dailyGoal -
      reviewTime -
      practiceTime;

    plan.push({
      id: "review",
      time: reviewTime,
      icon: "📖",
      title: `Review ${weakestTopic.name}`,
      description:
        "Review the core concepts and examples.",
      type: "Focus Area",
    });

    plan.push({
      id: "practice",
      time: practiceTime,
      icon: "✏️",
      title: `Practice ${weakestTopic.name}`,
      description:
        "Solve practice questions and apply what you learned.",
      type: "Practice",
    });

    plan.push({
      id: "quiz",
      time: quizTime,
      icon: "📝",
      title: "Knowledge Check",
      description:
        "Take a short quiz to measure today's improvement.",
      type: "Assessment",
    });
  } else {
    const learningTime = Math.round(
      dailyGoal * 0.6
    );

    const quizTime =
      dailyGoal - learningTime;

    plan.push({
      id: "learning",
      time: learningTime,
      icon: "📚",
      title: "Learn a New Topic",
      description:
        "Choose a subject and study a new concept.",
      type: "Learning",
    });

    plan.push({
      id: "first-quiz",
      time: quizTime,
      icon: "📝",
      title: "Take Your First Quiz",
      description:
        "Test your knowledge so StudyTwin can understand your strengths.",
      type: "Assessment",
    });
  }

  // Save completed tasks
  useEffect(() => {
    localStorage.setItem(
      "studytwin_completed_tasks",
      JSON.stringify(completedTasks)
    );
  }, [completedTasks]);

  // Timer
  useEffect(() => {
    if (activeTask === null) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds((previous) => previous + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [activeTask]);

  const startTask = (task) => {
    setActiveTask(task);
    setSeconds(0);
  };

  const pauseTask = () => {
    setActiveTask(null);
  };

  const completeTask = () => {
    if (!activeTask) {
      return;
    }

    if (!completedTasks.includes(activeTask.id)) {
      setCompletedTasks([
        ...completedTasks,
        activeTask.id,
      ]);
    }

    setActiveTask(null);
    setSeconds(0);
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(
      totalSeconds / 60
    );

    const remainingSeconds =
      totalSeconds % 60;

    return `${String(minutes).padStart(
      2,
      "0"
    )}:${String(remainingSeconds).padStart(
      2,
      "0"
    )}`;
  };

  const completedMinutes = plan
    .filter((task) =>
      completedTasks.includes(task.id)
    )
    .reduce(
      (total, task) => total + task.time,
      0
    );

  const dailyProgress = Math.min(
    Math.round(
      (completedMinutes / dailyGoal) * 100
    ),
    100
  );

  return (
    <div className="studyplan-page">

      {/* Header */}

      <div className="studyplan-header">

        <p className="page-label">
          Personalized Learning
        </p>

        <h1>
          🎯 Daily Study Plan
        </h1>

        <p>
          A learning plan created specifically
          for you by StudyTwin.
        </p>

      </div>


      {/* Daily Progress */}

      <section className="plan-greeting">

        <div className="plan-greeting-icon">
          🧠
        </div>

        <div className="plan-progress-info">

          <span>
            TODAY'S PROGRESS
          </span>

          <h2>
            {completedMinutes} / {dailyGoal} min
          </h2>

          <div className="daily-progress-bar">

            <div
              style={{
                width: `${dailyProgress}%`,
              }}
            ></div>

          </div>

          <p>
            {dailyProgress >= 100
              ? "🎉 Daily goal completed!"
              : `Keep going, ${profile.name}!`}
          </p>

        </div>

      </section>


      {/* Focus Area */}

      {weakestTopic && (

        <section className="focus-card">

          <div className="focus-icon">
            🎯
          </div>

          <div>

            <span>
              TODAY'S FOCUS
            </span>

            <h2>
              {weakestTopic.name}
            </h2>

            <p>
              Your current score is{" "}
              <strong>
                {weakestTopic.score}%
              </strong>
              . StudyTwin has selected this
              topic because it needs the most
              attention.
            </p>

          </div>

        </section>

      )}


      {/* Study Schedule */}

      <section className="plan-section">

        <div className="plan-section-header">

          <div>
            <h2>
              📅 Your Study Schedule
            </h2>

            <p>
              Complete these tasks today.
            </p>
          </div>

          <span>
            {completedTasks.length} / {plan.length}
          </span>

        </div>


        <div className="plan-list">

          {plan.map((item, index) => {

            const isCompleted =
              completedTasks.includes(
                item.id
              );

            const isActive =
              activeTask?.id === item.id;

            return (
              <div
                className={`plan-card ${
                  isCompleted
                    ? "completed"
                    : ""
                } ${
                  isActive
                    ? "active-task"
                    : ""
                }`}
                key={item.id}
              >

                <div className="plan-number">

                  {isCompleted
                    ? "✓"
                    : index + 1}

                </div>


                <div className="plan-item-icon">
                  {item.icon}
                </div>


                <div className="plan-item-content">

                  <span className="plan-type">
                    {item.type}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  {isActive && (
                    <div className="timer">

                      <strong>
                        {formatTime(seconds)}
                      </strong>

                    </div>
                  )}

                </div>


                <div className="plan-action">

                  <div className="plan-time">

                    {item.time}

                    <small>
                      min
                    </small>

                  </div>


                  {!isCompleted &&
                    !isActive && (
                      <button
                        onClick={() =>
                          startTask(item)
                        }
                      >
                        ▶ Start
                      </button>
                    )}


                  {isActive && (
                    <div className="timer-buttons">

                      <button
                        className="pause-button"
                        onClick={pauseTask}
                      >
                        ⏸
                      </button>

                      <button
                        className="complete-button"
                        onClick={completeTask}
                      >
                        ✓
                      </button>

                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </section>


      {/* Learning Insight */}

      <section className="plan-insight">

        <span>
          💡
        </span>

        <div>

          <strong>
            Why this plan?
          </strong>

          <p>
            StudyTwin prioritizes topics where
            you need more practice and balances
            learning, practice, and assessment
            within your daily study goal.
          </p>

        </div>

      </section>


      {/* Bottom Card */}

      <section className="plan-bottom-card">

        <div>
          📈
        </div>

        <div>

          <strong>
            Your plan adapts over time
          </strong>

          <p>
            Complete more quizzes and StudyTwin
            will automatically change your future
            recommendations.
          </p>

        </div>

      </section>

    </div>
  );
}

export default StudyPlan;