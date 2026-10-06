import { useEffect, useState } from "react";
import "./Achievements.css";

function Achievements({ quizResults = [] }) {
  const [focusSessions, setFocusSessions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(
      "studytwin_focus_sessions"
    );

    setFocusSessions(
      saved ? JSON.parse(saved) : []
    );
  }, []);

  const quizCount = Math.floor(
    quizResults.length / 5
  );

  const learningResults = (() => {
    const saved = localStorage.getItem(
      "studytwin_learning_results"
    );

    return saved ? JSON.parse(saved) : [];
  })();

  const learningCount =
    learningResults.length;

  const focusCount =
    focusSessions.length;

  const totalActivities =
    quizResults.length +
    learningCount +
    focusCount;

  const quizXP = quizResults.filter(
    (result) => result.correct
  ).length * 10;

  const learningXP =
    learningResults.filter(
      (result) => result.correct
    ).length * 10;

  const focusXP = focusSessions.reduce(
    (total, session) =>
      total + (session.xp || 0),
    0
  );

  const totalXP =
    quizXP +
    learningXP +
    focusXP;

  const level =
    Math.floor(totalXP / 100) + 1;

  const currentLevelXP =
    totalXP % 100;

  const achievements = [
    {
      id: 1,
      icon: "🌱",
      title: "First Step",
      description:
        "Complete your first learning activity.",
      unlocked:
        totalActivities >= 1,
    },

    {
      id: 2,
      icon: "🧠",
      title: "Knowledge Seeker",
      description:
        "Complete 5 learning activities.",
      unlocked:
        totalActivities >= 5,
    },

    {
      id: 3,
      icon: "🔥",
      title: "Focused Learner",
      description:
        "Complete your first focus session.",
      unlocked:
        focusCount >= 1,
    },

    {
      id: 4,
      icon: "📝",
      title: "Quiz Master",
      description:
        "Complete 3 quizzes.",
      unlocked:
        quizCount >= 3,
    },

    {
      id: 5,
      icon: "🚀",
      title: "Fast Learner",
      description:
        "Reach 80% or higher quiz accuracy.",
      unlocked:
        quizResults.length > 0 &&
        Math.round(
          (quizResults.filter(
            (result) => result.correct
          ).length /
            quizResults.length) *
            100
        ) >= 80,
    },

    {
      id: 6,
      icon: "🌌",
      title: "Skill Explorer",
      description:
        "Complete learning activities across multiple topics.",
      unlocked:
        new Set(
          [
            ...quizResults.map(
              (result) => result.topic
            ),
            ...learningResults.map(
              (result) => result.topic
            ),
          ]
        ).size >= 3,
    },
  ];

  const unlockedCount =
    achievements.filter(
      (achievement) =>
        achievement.unlocked
    ).length;

  return (
    <div className="achievements-page">

      {/* HEADER */}

      <div className="achievements-header">

        <p className="page-label">
          Your Learning Journey
        </p>

        <h1>
          🏆 Achievements
        </h1>

        <p>
          Earn XP, unlock badges and build your
          learning identity.
        </p>

      </div>


      {/* LEVEL CARD */}

      <section className="level-card">

        <div className="level-top">

          <div className="level-badge">
            ⭐
          </div>

          <div>

            <span>
              CURRENT LEVEL
            </span>

            <h2>
              Level {level}
            </h2>

          </div>

          <strong>
            {totalXP} XP
          </strong>

        </div>


        <div className="xp-bar">

          <div
            style={{
              width: `${currentLevelXP}%`,
            }}
          ></div>

        </div>


        <div className="xp-footer">

          <span>
            {currentLevelXP}/100 XP
          </span>

          <span>
            {100 - currentLevelXP} XP to next level
          </span>

        </div>

      </section>


      {/* STATS */}

      <section className="achievement-stats">

        <div>

          <strong>
            {unlockedCount}
          </strong>

          <span>
            Badges Unlocked
          </span>

        </div>

        <div>

          <strong>
            {totalXP}
          </strong>

          <span>
            Total XP
          </span>

        </div>

        <div>

          <strong>
            {totalActivities}
          </strong>

          <span>
            Activities
          </span>

        </div>

      </section>


      {/* BADGES */}

      <section className="badges-section">

        <div className="badges-heading">

          <h2>
            Your Badges
          </h2>

          <span>
            {unlockedCount}/
            {achievements.length}
          </span>

        </div>


        <div className="badges-grid">

          {achievements.map(
            (achievement) => (

              <div
                className={
                  achievement.unlocked
                    ? "badge-card unlocked"
                    : "badge-card locked"
                }
                key={achievement.id}
              >

                <div className="badge-icon">

                  {achievement.unlocked
                    ? achievement.icon
                    : "🔒"}

                </div>

                <h3>
                  {achievement.title}
                </h3>

                <p>
                  {achievement.description}
                </p>

                <span
                  className="badge-status"
                >
                  {achievement.unlocked
                    ? "UNLOCKED"
                    : "LOCKED"}
                </span>

              </div>

            )
          )}

        </div>

      </section>


      {/* MOTIVATION */}

      <section className="achievement-ai">

        <span>
          🤖
        </span>

        <div>

          <strong>
            StudyTwin Motivation
          </strong>

          <p>
            {totalXP === 0
              ? "Start your first learning activity and earn your first XP!"
              : totalXP < 100
              ? "You're getting started! Keep learning to reach Level 2."
              : totalXP < 300
              ? "Great progress! Your learning momentum is building."
              : "Amazing work! You're becoming a consistent learner."}
          </p>

        </div>

      </section>

    </div>
  );
}

export default Achievements;