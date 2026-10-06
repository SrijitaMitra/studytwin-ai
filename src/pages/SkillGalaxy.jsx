import { useMemo } from "react";
import "./SkillGalaxy.css";

function SkillGalaxy({ quizResults = [] }) {
  const subjects = [
    {
      name: "Python",
      icon: "🐍",
      defaultScore: 70,
    },
    {
      name: "AI / ML",
      icon: "🤖",
      defaultScore: 80,
    },
    {
      name: "DBMS",
      icon: "🗄️",
      defaultScore: 50,
    },
    {
      name: "JavaScript",
      icon: "⚡",
      defaultScore: 60,
    },
  ];

  const skillData = useMemo(() => {
    return subjects.map((subject) => {
      const results = quizResults.filter(
        (result) =>
          result.topic
            ?.toLowerCase()
            .includes(subject.name.toLowerCase())
      );

      if (results.length === 0) {
        return {
          ...subject,
          score: subject.defaultScore,
        };
      }

      const correct = results.filter(
        (result) => result.correct
      ).length;

      return {
        ...subject,
        score: Math.round(
          (correct / results.length) * 100
        ),
      };
    });
  }, [quizResults]);

  const averageScore = Math.round(
    skillData.reduce(
      (total, skill) => total + skill.score,
      0
    ) / skillData.length
  );

  const strongest = [...skillData].sort(
    (a, b) => b.score - a.score
  )[0];

  const weakest = [...skillData].sort(
    (a, b) => a.score - b.score
  )[0];

  const getStatus = (score) => {
    if (score >= 80) return "Mastered";
    if (score >= 60) return "Developing";
    return "Needs Practice";
  };

  return (
    <div className="galaxy-page">

      {/* HEADER */}

      <div className="galaxy-header">

        <p className="page-label">
          Your Personal Knowledge Map
        </p>

        <h1>
          🌌 Skill Galaxy
        </h1>

        <p>
          Your knowledge grows as you learn,
          practice and complete quizzes.
        </p>

      </div>


      {/* MAIN GALAXY */}

      <section className="galaxy-card">

        <div className="galaxy-orbit orbit-one">
          <div className="planet python">
            🐍
          </div>
        </div>

        <div className="galaxy-orbit orbit-two">
          <div className="planet ai">
            🤖
          </div>
        </div>

        <div className="galaxy-orbit orbit-three">
          <div className="planet dbms">
            🗄️
          </div>
        </div>

        <div className="galaxy-orbit orbit-four">
          <div className="planet js">
            ⚡
          </div>
        </div>

        <div className="galaxy-core">

          <strong>
            {averageScore}%
          </strong>

          <span>
            Knowledge
          </span>

        </div>

      </section>


      {/* SKILL SUMMARY */}

      <section className="galaxy-summary">

        <div>
          <span>🌟</span>

          <strong>
            {strongest.name}
          </strong>

          <small>
            Strongest Skill
          </small>
        </div>


        <div>
          <span>🎯</span>

          <strong>
            {weakest.name}
          </strong>

          <small>
            Growth Area
          </small>
        </div>


        <div>
          <span>🧠</span>

          <strong>
            {averageScore}%
          </strong>

          <small>
            Average Mastery
          </small>
        </div>

      </section>


      {/* SKILLS */}

      <section className="skills-section">

        <div className="skills-heading">

          <h2>
            Your Skills
          </h2>

          <span>
            Live from your activity
          </span>

        </div>


        <div className="skills-list">

          {skillData.map((skill) => (

            <div
              className="skill-card"
              key={skill.name}
            >

              <div className="skill-top">

                <div className="skill-name">

                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <div>

                    <strong>
                      {skill.name}
                    </strong>

                    <small>
                      {getStatus(skill.score)}
                    </small>

                  </div>

                </div>

                <strong className="skill-score">
                  {skill.score}%
                </strong>

              </div>


              <div className="skill-bar">

                <div
                  style={{
                    width: `${skill.score}%`,
                  }}
                ></div>

              </div>


              <div className="skill-footer">

                <span>
                  Knowledge mastery
                </span>

                <span>
                  {skill.score >= 80
                    ? "🟢 Strong"
                    : skill.score >= 60
                    ? "🟡 Growing"
                    : "🔴 Practice"}
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* AI INSIGHT */}

      <section className="galaxy-ai">

        <span>
          🤖
        </span>

        <div>

          <strong>
            StudyTwin Insight
          </strong>

          <p>
            Your strongest skill is{" "}
            <b>{strongest.name}</b>.
            Focus your next study session on{" "}
            <b>{weakest.name}</b> to improve
            your overall learning balance.
          </p>

        </div>

      </section>


      {/* FOOTER */}

      <div className="galaxy-footer">

        🧬 Your Skill Galaxy evolves as
        StudyTwin learns about you.

      </div>

    </div>
  );
}

export default SkillGalaxy;