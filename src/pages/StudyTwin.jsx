import { useState } from "react";
import "./StudyTwin.css";

function StudyTwin({ quizResults }) {
  /* =========================
     PROFILE
  ========================== */

  const [profile] = useState(() => {
    const savedProfile = localStorage.getItem(
      "studytwin_profile"
    );

    return savedProfile
      ? JSON.parse(savedProfile)
      : {
          name: "Student",
          goal: "Get better at programming",
          level: "Intermediate",
          studyTime: "Evening",
          dailyGoal: 60,
        };
  });


  /* =========================
     LEARNING RESULTS
  ========================== */

  const [learningResults] = useState(() => {
    const saved = localStorage.getItem(
      "studytwin_learning_results"
    );

    return saved ? JSON.parse(saved) : [];
  });


  /* =========================
     QUIZ PERFORMANCE
  ========================== */

  const topicMap = {};

  if (quizResults && quizResults.length > 0) {
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
  }


  const quizTopics = Object.entries(topicMap).map(
    ([name, data]) => ({
      name,
      score: Math.round(
        (data.correct / data.total) * 100
      ),
      correct: data.correct,
      total: data.total,
    })
  );


  /* =========================
     LEARNING PERFORMANCE
  ========================== */

  const learningMap = {};

  learningResults.forEach((result) => {
    if (!learningMap[result.topic]) {
      learningMap[result.topic] = {
        correct: 0,
        total: 0,
      };
    }

    learningMap[result.topic].total += 1;

    if (result.correct) {
      learningMap[result.topic].correct += 1;
    }
  });


  const learningTopics = Object.entries(
    learningMap
  ).map(([name, data]) => ({
    name,
    score: Math.round(
      (data.correct / data.total) * 100
    ),
    correct: data.correct,
    total: data.total,
  }));


  /* =========================
     COMBINED TOPIC INTELLIGENCE
  ========================== */

  const allTopicNames = [
    ...new Set([
      ...quizTopics.map((topic) => topic.name),
      ...learningTopics.map((topic) => topic.name),
    ]),
  ];


  const combinedTopics = allTopicNames.map(
    (name) => {
      const quizTopic = quizTopics.find(
        (topic) => topic.name === name
      );

      const learningTopic =
        learningTopics.find(
          (topic) => topic.name === name
        );

      let score = 0;
      let totalSources = 0;

      if (quizTopic) {
        score += quizTopic.score;
        totalSources++;
      }

      if (learningTopic) {
        score += learningTopic.score;
        totalSources++;
      }

      return {
        name,
        score: Math.round(
          score / totalSources
        ),
        quizScore: quizTopic
          ? quizTopic.score
          : null,
        learningScore: learningTopic
          ? learningTopic.score
          : null,
      };
    }
  );


  /* =========================
     SORT TOPICS
  ========================== */

  const sortedTopics = [
    ...combinedTopics,
  ].sort(
    (a, b) => a.score - b.score
  );


  const weakestTopic =
    sortedTopics.length > 0
      ? sortedTopics[0]
      : null;


  const strongestTopic =
    sortedTopics.length > 0
      ? sortedTopics[
          sortedTopics.length - 1
        ]
      : null;


  /* =========================
     OVERALL SCORE
  ========================== */

  const totalQuizQuestions =
    quizResults?.length || 0;

  const correctQuizQuestions =
    quizResults?.filter(
      (result) => result.correct
    ).length || 0;

  const quizScore =
    totalQuizQuestions > 0
      ? Math.round(
          (correctQuizQuestions /
            totalQuizQuestions) *
            100
        )
      : 0;


  const totalLearningQuestions =
    learningResults.length;

  const correctLearningQuestions =
    learningResults.filter(
      (result) => result.correct
    ).length;

  const learningScore =
    totalLearningQuestions > 0
      ? Math.round(
          (correctLearningQuestions /
            totalLearningQuestions) *
            100
        )
      : 0;


  let overallScore = 0;

  if (
    totalQuizQuestions > 0 &&
    totalLearningQuestions > 0
  ) {
    overallScore = Math.round(
      (quizScore + learningScore) / 2
    );
  } else if (totalQuizQuestions > 0) {
    overallScore = quizScore;
  } else if (
    totalLearningQuestions > 0
  ) {
    overallScore = learningScore;
  }


  /* =========================
     PERSONALIZED RECOMMENDATION
  ========================== */

  let recommendation = "";
  let recommendationIcon = "🧠";


  if (!weakestTopic) {

    recommendation =
      "Start your first learning session. StudyTwin will learn about your strengths and weaknesses as you study.";

  } else if (weakestTopic.score < 50) {

    recommendationIcon = "🔴";

    recommendation =
      `Your biggest focus area is ${weakestTopic.name}. Spend ${Math.max(
        15,
        Math.round(profile.dailyGoal * 0.4)
      )} minutes reviewing this topic before taking another quiz.`;

  } else if (weakestTopic.score < 70) {

    recommendationIcon = "🟡";

    recommendation =
      `You are developing your ${weakestTopic.name} knowledge. Practice more examples and complete another knowledge check.`;

  } else if (overallScore >= 85) {

    recommendationIcon = "🚀";

    recommendation =
      "Excellent progress! Your knowledge is strong. StudyTwin recommends challenging yourself with advanced topics.";

  } else {

    recommendationIcon = "💡";

    recommendation =
      `Keep building your knowledge. Your next recommended focus is ${weakestTopic.name}.`;

  }


  /* =========================
     TODAY'S PLAN
  ========================== */

  const dailyGoal = Number(
    profile.dailyGoal || 60
  );


  let plan = [];


  if (weakestTopic) {

    const reviewTime = Math.max(
      10,
      Math.round(dailyGoal * 0.4)
    );

    const practiceTime = Math.max(
      10,
      Math.round(dailyGoal * 0.35)
    );

    const testTime = Math.max(
      5,
      dailyGoal -
        reviewTime -
        practiceTime
    );


    plan = [
      {
        icon: "📖",
        title: `Review ${weakestTopic.name}`,
        time: `${reviewTime} min`,
        description:
          "Review the key concepts and examples.",
      },

      {
        icon: "✍️",
        title: `Practice ${weakestTopic.name}`,
        time: `${practiceTime} min`,
        description:
          "Solve examples and apply what you learned.",
      },

      {
        icon: "🧠",
        title: "Knowledge Check",
        time: `${testTime} min`,
        description:
          "Test yourself and let StudyTwin update your learning profile.",
      },
    ];

  } else {

    const learningTime = Math.round(
      dailyGoal * 0.6
    );

    const quizTime =
      dailyGoal - learningTime;


    plan = [
      {
        icon: "📚",
        title: "Learn a New Topic",
        time: `${learningTime} min`,
        description:
          "Choose a topic from the Knowledge Center.",
      },

      {
        icon: "📝",
        title: "Take Your First Quiz",
        time: `${quizTime} min`,
        description:
          "Test your understanding and build your first learning profile.",
      },
    ];

  }


  /* =========================
     LEARNING INTELLIGENCE
  ========================== */

  const knowledgeStatus =
    learningResults.length === 0
      ? "Getting started"
      : learningScore >= 80
      ? "Strong learner"
      : learningScore >= 60
      ? "Making progress"
      : "Needs more practice";


  return (
    <div className="study-twin-page">

      {/* =========================
          HEADER
      ========================== */}

      <div className="study-twin-header">

        <p className="page-label">
          Your Personal AI
        </p>

        <h1>
          🧠 StudyTwin
        </h1>

        <p>
          Your learning twin understands
          how you are progressing and helps
          you decide what to study next.
        </p>

      </div>


      {/* =========================
          GREETING
      ========================== */}

      <section className="twin-card greeting-card">

        <div className="twin-avatar">
          🧠
        </div>

        <div>

          <h2>
            Hi {profile.name} 👋
          </h2>

          <p>
            Your current goal is:
            <strong>
              {" "}
              {profile.goal}
            </strong>
          </p>

        </div>

      </section>


      {/* =========================
          RECOMMENDATION
      ========================== */}

      <section className="twin-card recommendation-card">

        <div className="recommendation-icon">
          {recommendationIcon}
        </div>

        <div>

          <p className="small-label">
            TODAY'S RECOMMENDATION
          </p>

          <h3>
            Your personalized focus
          </h3>

          <p>
            {recommendation}
          </p>

        </div>

      </section>


      {/* =========================
          LEARNING PROFILE
      ========================== */}

      <section className="twin-section">

        <div className="twin-section-heading">

          <div>
            <h2>
              Your Learning Profile
            </h2>

            <p>
              StudyTwin's current understanding
            </p>
          </div>

        </div>


        <div className="profile-intelligence-grid">

          <div className="intelligence-card">

            <span>
              📊
            </span>

            <strong>
              {overallScore}%
            </strong>

            <small>
              Overall Knowledge
            </small>

          </div>


          <div className="intelligence-card">

            <span>
              📝
            </span>

            <strong>
              {totalQuizQuestions}
            </strong>

            <small>
              Quiz Questions
            </small>

          </div>


          <div className="intelligence-card">

            <span>
              📚
            </span>

            <strong>
              {totalLearningQuestions}
            </strong>

            <small>
              Knowledge Checks
            </small>

          </div>


          <div className="intelligence-card">

            <span>
              🎯
            </span>

            <strong>
              {combinedTopics.length}
            </strong>

            <small>
              Topics Analyzed
            </small>

          </div>

        </div>

      </section>


      {/* =========================
          TOPIC INTELLIGENCE
      ========================== */}

      <section className="twin-section">

        <div className="twin-section-heading">

          <div>

            <h2>
              Topic Intelligence
            </h2>

            <p>
              What StudyTwin knows about your subjects
            </p>

          </div>

        </div>


        {combinedTopics.length === 0 ? (

          <div className="empty-twin-card">

            <span>
              🔍
            </span>

            <h3>
              Not enough data yet
            </h3>

            <p>
              Take a quiz or complete a
              Test Yourself question to
              let StudyTwin understand
              your knowledge.
            </p>

          </div>

        ) : (

          <div className="topic-intelligence-list">

            {sortedTopics.map(
              (topic) => {

                let status =
                  "Needs Practice";

                let icon = "🔴";

                if (topic.score >= 80) {

                  status = "Strong";
                  icon = "🟢";

                } else if (
                  topic.score >= 60
                ) {

                  status = "Developing";
                  icon = "🟡";

                }


                return (

                  <div
                    className="topic-intelligence-item"
                    key={topic.name}
                  >

                    <div className="topic-intelligence-top">

                      <div>

                        <span>
                          {icon}
                        </span>

                        <strong>
                          {topic.name}
                        </strong>

                      </div>

                      <strong>
                        {topic.score}%
                      </strong>

                    </div>


                    <div className="topic-intelligence-bar">

                      <div
                        style={{
                          width: `${topic.score}%`,
                        }}
                      ></div>

                    </div>


                    <div className="topic-intelligence-bottom">

                      <span>
                        {status}
                      </span>

                      {topic.quizScore !==
                        null && (
                        <small>
                          Quiz:{" "}
                          {topic.quizScore}%
                        </small>
                      )}

                      {topic.learningScore !==
                        null && (
                        <small>
                          Learning:{" "}
                          {topic.learningScore}%
                        </small>
                      )}

                    </div>

                  </div>

                );

              }
            )}

          </div>

        )}

      </section>


      {/* =========================
          TODAY'S STUDY PLAN
      ========================== */}

      <section className="twin-section">

        <div className="twin-section-heading">

          <div>

            <h2>
              Today's Study Plan
            </h2>

            <p>
              Based on your current performance
            </p>

          </div>

          <span className="plan-time">
            {dailyGoal} min
          </span>

        </div>


        <div className="twin-plan">

          {plan.map(
            (item, index) => (

              <div
                className="plan-item"
                key={index}
              >

                <div className="plan-icon">
                  {item.icon}
                </div>

                <div className="plan-info">

                  <div className="plan-title">

                    <strong>
                      {item.title}
                    </strong>

                    <span>
                      {item.time}
                    </span>

                  </div>

                  <p>
                    {item.description}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* =========================
          LEARNING INTELLIGENCE
      ========================== */}

      <section className="twin-learning-card">

        <div className="twin-learning-header">

          <div>

            <span className="twin-learning-icon">
              📚
            </span>

            <div>

              <h3>
                Learning Intelligence
              </h3>

              <p>
                What StudyTwin learned from your
                knowledge checks
              </p>

            </div>

          </div>

        </div>


        <div className="twin-learning-stats">

          <div>

            <strong>
              {learningResults.length}
            </strong>

            <span>
              Concepts Tested
            </span>

          </div>


          <div>

            <strong>
              {correctLearningQuestions}
            </strong>

            <span>
              Correct
            </span>

          </div>


          <div>

            <strong>
              {learningScore}%
            </strong>

            <span>
              Knowledge Score
            </span>

          </div>

        </div>


        <div className="twin-learning-insight">

          {learningResults.length === 0 ? (

            <>
              💡 Complete a topic and answer
              its Test Yourself question.
              StudyTwin will start learning
              about your knowledge level.
            </>

          ) : (

            <>
              💡 Your current learning status is
              <strong>
                {" "}
                {knowledgeStatus}
              </strong>
              . Keep testing yourself so
              StudyTwin can make better
              recommendations.
            </>

          )}

        </div>

      </section>


      {/* =========================
          INSIGHT
      ========================== */}

      <section className="twin-insight">

        <span>
          💡
        </span>

        <div>

          <strong>
            StudyTwin Insight
          </strong>

          <p>

            {weakestTopic
              ? `Your next best opportunity for improvement is ${weakestTopic.name}.`
              : "Complete your first learning session so StudyTwin can begin analyzing your learning pattern."}

            {strongestTopic &&
              weakestTopic &&
              strongestTopic.name !==
                weakestTopic.name && (
                <>
                  {" "}
                  You are currently strongest
                  in {strongestTopic.name}.
                </>
              )}

          </p>

        </div>

      </section>

    </div>
  );
}

export default StudyTwin;