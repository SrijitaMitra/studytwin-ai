import { useEffect, useState } from "react";
import "./FocusMode.css";

function FocusMode() {
  const [subject, setSubject] = useState("Python");
  const [minutes, setMinutes] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);

  const totalSeconds = minutes * 60;

  useEffect(() => {
    if (!isRunning) return;

    if (secondsLeft <= 0) {
      setIsRunning(false);
      setCompleted(true);

      const savedSessions =
        localStorage.getItem(
          "studytwin_focus_sessions"
        );

      const sessions = savedSessions
        ? JSON.parse(savedSessions)
        : [];

      const newSession = {
        id: Date.now(),
        subject,
        minutes,
        date: new Date().toISOString(),
        xp: minutes * 2,
      };

      localStorage.setItem(
        "studytwin_focus_sessions",
        JSON.stringify([
          ...sessions,
          newSession,
        ])
      );

      return;
    }

    const timer = setInterval(() => {
      setSecondsLeft((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [
    isRunning,
    secondsLeft,
    subject,
    minutes,
  ]);

  const startSession = () => {
    setCompleted(false);
    setIsRunning(true);
  };

  const pauseSession = () => {
    setIsRunning(false);
  };

  const resetSession = () => {
    setIsRunning(false);
    setCompleted(false);
    setSecondsLeft(minutes * 60);
  };

  const changeDuration = (value) => {
    const newMinutes = Number(value);

    setMinutes(newMinutes);
    setSecondsLeft(newMinutes * 60);
    setIsRunning(false);
    setCompleted(false);
  };

  const formatTime = () => {
    const mins = Math.floor(secondsLeft / 60);
    const secs = secondsLeft % 60;

    return `${String(mins).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  const progress =
    ((totalSeconds - secondsLeft) /
      totalSeconds) *
    100;

  return (
    <div className="focus-page">

      {/* HEADER */}

      <div className="focus-header">

        <p className="page-label">
          Your Personal Study Room
        </p>

        <h1>
          ⏱️ Focus Mode
        </h1>

        <p>
          Block distractions and focus on one
          learning goal at a time.
        </p>

      </div>


      {/* STUDY TWIN MESSAGE */}

      <section className="focus-ai">

        <span>
          🤖
        </span>

        <div>

          <strong>
            StudyTwin recommends
          </strong>

          <p>
            Focus on{" "}
            <b>{subject}</b>{" "}
            for {minutes} minutes.
            Consistent focused sessions can
            improve your learning performance.
          </p>

        </div>

      </section>


      {/* TIMER CARD */}

      <section className="timer-card">

        <div className="timer-ring">

          <div className="timer-inner">

            <span className="timer-label">
              {isRunning
                ? "FOCUSING"
                : completed
                ? "COMPLETED"
                : "READY"}
            </span>

            <strong>
              {formatTime()}
            </strong>

            <small>
              {subject}
            </small>

          </div>

        </div>


        {/* PROGRESS */}

        <div className="focus-progress">

          <div
            style={{
              width: `${progress}%`,
            }}
          ></div>

        </div>


        {/* CONTROLS */}

        <div className="timer-controls">

          {!isRunning ? (

            <button
              className="start-button"
              onClick={startSession}
            >
              ▶ Start Focus
            </button>

          ) : (

            <button
              className="pause-button"
              onClick={pauseSession}
            >
              ⏸ Pause
            </button>

          )}

          <button
            className="reset-button"
            onClick={resetSession}
          >
            ↻ Reset
          </button>

        </div>

      </section>


      {/* SETTINGS */}

      <section className="focus-settings">

        <div className="setting-group">

          <label>
            📚 Study Topic
          </label>

          <select
            value={subject}
            onChange={(e) =>
              setSubject(e.target.value)
            }
          >
            <option>Python</option>
            <option>JavaScript</option>
            <option>AI / ML</option>
            <option>DBMS</option>
          </select>

        </div>


        <div className="setting-group">

          <label>
            ⏱️ Session Duration
          </label>

          <select
            value={minutes}
            onChange={(e) =>
              changeDuration(e.target.value)
            }
          >
            <option value="15">
              15 minutes
            </option>

            <option value="25">
              25 minutes
            </option>

            <option value="30">
              30 minutes
            </option>

            <option value="45">
              45 minutes
            </option>

            <option value="60">
              60 minutes
            </option>
          </select>

        </div>

      </section>


      {/* COMPLETION */}

      {completed && (

        <section className="focus-complete">

          <div className="complete-icon">
            🎉
          </div>

          <h2>
            Focus session completed!
          </h2>

          <p>
            You studied{" "}
            <strong>{subject}</strong>{" "}
            for{" "}
            <strong>{minutes} minutes</strong>.
          </p>

          <div className="xp-reward">

            ⭐ +{minutes * 2} XP

          </div>

          <small>
            StudyTwin has recorded this session.
          </small>

        </section>

      )}


      {/* FOCUS TIPS */}

      <section className="focus-tips">

        <h2>
          🧠 Focus Tips
        </h2>

        <div className="tip">

          <span>
            📱
          </span>

          <p>
            Keep your phone away from your
            study area.
          </p>

        </div>

        <div className="tip">

          <span>
            💧
          </span>

          <p>
            Keep water nearby so you don't
            need unnecessary breaks.
          </p>

        </div>

        <div className="tip">

          <span>
            🎯
          </span>

          <p>
            Focus on one topic instead of
            switching between subjects.
          </p>

        </div>

      </section>

    </div>
  );
}

export default FocusMode;