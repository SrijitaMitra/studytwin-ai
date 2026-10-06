import { useMemo } from "react";
import "./LearningDNA.css";

function LearningDNA({ quizResults = [] }) {
  const learningResults = useMemo(() => {
    const saved = localStorage.getItem(
      "studytwin_learning_results"
    );

    return saved ? JSON.parse(saved) : [];
  }, []);

  const profile = useMemo(() => {
    const saved = localStorage.getItem(
      "studytwin_profile"
    );

    return saved
      ? JSON.parse(saved)
      : {
          name: "Student",
          goal: "Get better at programming",
          level: "Intermediate",
          dailyGoal: 60,
        };
  }, []);

  const totalQuiz = quizResults.length;

  const correctQuiz = quizResults.filter(
    (item) => item.correct
  ).length;

  const quizScore =
    totalQuiz > 0
      ? Math.round((correctQuiz / totalQuiz) * 100)
      : 0;

  const totalLearning =
    learningResults.length;

  const correctLearning =
    learningResults.filter(
      (item) => item.correct
    ).length;

  const learningScore =
    totalLearning > 0
      ? Math.round(
          (correctLearning / totalLearning) * 100
        )
      : 0;

  const overallScore =
    totalQuiz > 0 && totalLearning > 0
      ? Math.round(
          (quizScore + learningScore) / 2
        )
      : totalQuiz > 0
      ? quizScore
      : learningScore;

  const topicMap = {};

  quizResults.forEach((result) => {
    if (!topicMap[result.topic]) {
      topicMap[result.topic] = {
        correct: 0,
        total: 0,
      };
    }

    topicMap[result.topic].total++;

    if (result.correct) {
      topicMap[result.topic].correct++;
    }
  });

  learningResults.forEach((result) => {
    if (!topicMap[result.topic]) {
      topicMap[result.topic] = {
        correct: 0,
        total: 0,
      };
    }

    topicMap[result.topic].total++;

    if (result.correct) {
      topicMap[result.topic].correct++;
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

  const strongestTopic =
    topics.length > 0
      ? [...topics].sort(
          (a, b) => b.score - a.score
        )[0]
      : null;

  const weakestTopic =
    topics.length > 0
      ? [...topics].sort(
          (a, b) => a.score - b.score
        )[0]
      : null;

  let dnaType = "🌱 The Explorer";
  let dnaTitle = "You're discovering your learning style";
  let dnaDescription =
    "Keep learning and testing yourself. StudyTwin needs more data to understand your unique learning pattern.";

  if (overallScore >= 85) {
    dnaType = "🚀 The Fast Learner";
    dnaTitle = "You learn concepts quickly";
    dnaDescription =
      "Your performance shows strong understanding. You are ready for advanced challenges and deeper concepts.";
  } else if (overallScore >= 70) {
    dnaType = "⚡ The Smart Builder";
    dnaTitle = "You build knowledge steadily";
    dnaDescription =
      "You have a solid foundation. Consistent practice can turn your good understanding into mastery.";
  } else if (overallScore >= 50) {
    dnaType = "🔥 The Persistent Learner";
    dnaTitle = "You improve through practice";
    dnaDescription =
      "Your learning journey shows that repetition and practice are helping you build stronger understanding.";
  } else if (totalQuiz > 0 || totalLearning > 0) {
    dnaType = "🌱 The Explorer";
    dnaTitle = "You're building your foundation";
    dnaDescription =
      "You are still developing your knowledge. Focus on your weaker areas and keep testing yourself.";
  }

  const traits = [
    {
      icon: "🧠",
      title: "Understanding",
      value: `${overallScore}%`,
    },
    {
      icon: "🎯",
      title: "Focus",
      value:
        weakestTopic && weakestTopic.score < 60
          ? "Needs Work"
          : "Good",
    },
    {
      icon: "⚡",
      title: "Learning",
      value:
        overallScore >= 80
          ? "Fast"
          : overallScore >= 60
          ? "Steady"
          : "Growing",
    },
    {
      icon: "🔥",
      title: "Consistency",
      value:
        totalQuiz + totalLearning >= 10
          ? "Strong"
          : totalQuiz + totalLearning >= 5
          ? "Building"
          : "Starting",
    },
  ];

  return (
    <div className="dna-page">

      {/* HEADER */}

      <div className="dna-header">

        <p className="page-label">
          Your Personal Learning Identity
        </p>

        <h1>
          🧬 Learning DNA
        </h1>

        <p>
          StudyTwin analyzes your learning
          behaviour and creates a unique
          learning profile for you.
        </p>

      </div>


      {/* DNA HERO */}

      <section className="dna-hero">

        <div className="dna-orbit">

          <div className="dna-core">
            🧠
          </div>

        </div>

        <p className="dna-label">
          YOUR LEARNING TYPE
        </p>

        <h2>
          {dnaType}
        </h2>

        <h3>
          {dnaTitle}
        </h3>

        <p>
          {dnaDescription}
        </p>

      </section>


      {/* SCORE */}

      <section className="dna-score-card">

        <div className="dna-score-circle">

          <strong>
            {overallScore}%
          </strong>

          <span>
            Knowledge
          </span>

        </div>

        <div>

          <h3>
            Your Learning Score
          </h3>

          <p>
            Based on your quizzes and
            knowledge checks.
          </p>

        </div>

      </section>


      {/* TRAITS */}

      <section className="dna-section">

        <div className="dna-section-heading">

          <h2>
            Your Learning Traits
          </h2>

          <span>
            AI-generated profile
          </span>

        </div>

        <div className="dna-traits">

          {traits.map((trait) => (

            <div
              className="dna-trait"
              key={trait.title}
            >

              <span>
                {trait.icon}
              </span>

              <strong>
                {trait.value}
              </strong>

              <small>
                {trait.title}
              </small>

            </div>

          ))}

        </div>

      </section>


      {/* STRENGTH */}

      <section className="dna-section">

        <div className="dna-insight strength">

          <span>
            🟢
          </span>

          <div>

            <strong>
              Your strongest area
            </strong>

            <p>
              {strongestTopic
                ? `${strongestTopic.name} — ${strongestTopic.score}%`
                : "Complete some quizzes to discover your strongest area."}
            </p>

          </div>

        </div>


        <div className="dna-insight weakness">

          <span>
            🔴
          </span>

          <div>

            <strong>
              Your growth area
            </strong>

            <p>
              {weakestTopic
                ? `${weakestTopic.name} — ${weakestTopic.score}%`
                : "StudyTwin will identify this after you complete more learning activities."}
            </p>

          </div>

        </div>

      </section>


      {/* AI MESSAGE */}

      <section className="dna-ai-card">

        <span>
          🤖
        </span>

        <div>

          <strong>
            StudyTwin's AI Insight
          </strong>

          <p>

            {profile.name}, your Learning DNA
            will become more accurate as you
            complete quizzes, study topics and
            test your knowledge.

          </p>

        </div>

      </section>


      {/* FOOTER */}

      <div className="dna-footer">

        <span>
          🔒
        </span>

        <p>
          Your Learning DNA is created from
          your activity inside StudyTwin.
        </p>

      </div>

    </div>
  );
}

export default LearningDNA;