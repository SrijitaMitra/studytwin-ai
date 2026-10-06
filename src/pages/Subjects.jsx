import { useState } from "react";
import "./Subjects.css";

function Subjects() {
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "Python",
      icon: "🐍",
      level: "Intermediate",
      progress: 70,
    },
    {
      id: 2,
      name: "DBMS",
      icon: "🗄️",
      level: "Beginner",
      progress: 50,
    },
    {
      id: 3,
      name: "AI / ML",
      icon: "🤖",
      level: "Advanced",
      progress: 80,
    },
    {
      id: 4,
      name: "JavaScript",
      icon: "⚡",
      level: "Intermediate",
      progress: 60,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newSubject, setNewSubject] = useState("");
  const [newLevel, setNewLevel] = useState("Beginner");

  const addSubject = () => {
    if (newSubject.trim() === "") {
      alert("Please enter a subject name.");
      return;
    }

    const subject = {
      id: Date.now(),
      name: newSubject,
      icon: "📚",
      level: newLevel,
      progress:
        newLevel === "Beginner"
          ? 30
          : newLevel === "Intermediate"
          ? 60
          : 85,
    };

    setSubjects([...subjects, subject]);

    setNewSubject("");
    setNewLevel("Beginner");
    setShowForm(false);
  };

  return (
    <div className="subjects-page">

      {/* Header */}

      <div className="subjects-header">

        <div>
          <p className="page-label">Your Learning</p>
          <h1>📚 My Subjects</h1>
        </div>

        <button
          className="add-button"
          onClick={() => setShowForm(!showForm)}
        >
          + Add
        </button>

      </div>

      {/* Add Subject Form */}

      {showForm && (
        <div className="add-subject-form">

          <h2>Add a Subject</h2>

          <label>
            Subject Name
          </label>

          <input
            type="text"
            placeholder="Example: Java"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
          />

          <label>
            Your Current Level
          </label>

          <select
            value={newLevel}
            onChange={(e) => setNewLevel(e.target.value)}
          >
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>

          <button
            className="save-button"
            onClick={addSubject}
          >
            Add Subject
          </button>

        </div>
      )}

      {/* Subject Count */}

      <div className="subject-summary">
        <strong>{subjects.length}</strong>
        <span>subjects you're learning</span>
      </div>

      {/* Subject Cards */}

      <div className="subjects-list">

        {subjects.map((subject) => (
          <div
            className="subject-item"
            key={subject.id}
          >

            <div className="subject-top">

              <div className="subject-left">

                <div className="subject-icon-large">
                  {subject.icon}
                </div>

                <div>
                  <h3>{subject.name}</h3>
                  <p>{subject.level}</p>
                </div>

              </div>

              <strong>
                {subject.progress}%
              </strong>

            </div>

            <div className="subject-progress">

              <div
                style={{
                  width: `${subject.progress}%`,
                }}
              ></div>

            </div>

            <p className="progress-text">
              Learning progress
            </p>

          </div>
        ))}

      </div>

      {/* Tip */}

      <div className="learning-tip">

        <span>🧠</span>

        <div>
          <strong>StudyTwin Tip</strong>

          <p>
            Your subject performance will help StudyTwin
            create a personalized study plan for you.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Subjects;