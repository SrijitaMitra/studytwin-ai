import { useState } from "react";
import "./App.css";

import Subjects from "./pages/Subjects";
import Quiz from "./pages/Quiz";
import Analysis from "./pages/Analysis";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import StudyTwin from "./pages/StudyTwin";
import StudyPlan from "./pages/StudyPlan";
import Learning from "./pages/Learning";
import LearningDNA from "./pages/LearningDNA";
import SkillGalaxy from "./pages/SkillGalaxy";
import FocusMode from "./pages/FocusMode";
import Achievements from "./pages/Achievements";
import AIMentor from "./pages/AIMentor";
import ExamReadiness from "./pages/ExamReadiness";
import LearningForecast from "./pages/LearningForecast";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  const [quizResults, setQuizResults] = useState(() => {
    const saved = localStorage.getItem("studytwin_quiz_results");

    return saved ? JSON.parse(saved) : [];
  });

  const handleQuizComplete = (results) => {
    const updatedResults = [
      ...quizResults,
      ...results,
    ];

    setQuizResults(updatedResults);

    localStorage.setItem(
      "studytwin_quiz_results",
      JSON.stringify(updatedResults)
    );

    setActiveTab("analysis");
  };

  /* =========================
     SPECIAL PAGES
  ========================= */

  if (activeTab === "subjects") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <Subjects />
      </AppLayout>
    );
  }

  if (activeTab === "quiz") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <Quiz onQuizComplete={handleQuizComplete} />
      </AppLayout>
    );
  }

  if (activeTab === "analysis") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <Analysis quizResults={quizResults} />
      </AppLayout>
    );
  }

  if (activeTab === "progress") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <Progress quizResults={quizResults} />
      </AppLayout>
    );
  }

  if (activeTab === "profile") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <Profile />
      </AppLayout>
    );
  }

  if (activeTab === "twin") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <StudyTwin quizResults={quizResults} />
      </AppLayout>
    );
  }

  if (activeTab === "plan") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <StudyPlan quizResults={quizResults} />
      </AppLayout>
    );
  }

  if (activeTab === "learning") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <Learning />
      </AppLayout>
    );
  }

  if (activeTab === "dna") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <LearningDNA quizResults={quizResults} />
      </AppLayout>
    );
  }

  if (activeTab === "galaxy") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <SkillGalaxy quizResults={quizResults} />
      </AppLayout>
    );
  }

  if (activeTab === "focus") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <FocusMode />
      </AppLayout>
    );
  }

  if (activeTab === "achievements") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <Achievements quizResults={quizResults} />
      </AppLayout>
    );
  }

  if (activeTab === "mentor") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <AIMentor quizResults={quizResults} />
      </AppLayout>
    );
  }

  if (activeTab === "exam") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <ExamReadiness quizResults={quizResults} />
      </AppLayout>
    );
  }

  /* =========================
     🔮 LEARNING TIME MACHINE
  ========================= */

  if (activeTab === "forecast") {
    return (
      <AppLayout
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      >
        <LearningForecast
          quizResults={quizResults}
        />
      </AppLayout>
    );
  }

  /* =========================
     HOME
  ========================= */

  return (
    <AppLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
    >
      <div className="home-page">

        <div className="welcome-section">
          <p className="page-label">
            YOUR PERSONAL AI LEARNING COMPANION
          </p>

          <h1>
            Welcome back 👋
          </h1>

          <p className="welcome-text">
            Let's make your learning smarter today.
          </p>
        </div>

        {/* HERO */}

        <div className="hero-card">

          <div>
            <span>🧠 StudyTwin AI</span>

            <h2>
              Learn smarter.
              <br />
              Grow faster.
            </h2>

            <p>
              Your AI-powered learning twin adapts
              to the way you learn.
            </p>

            <button
              onClick={() => setActiveTab("twin")}
            >
              Meet Your StudyTwin →
            </button>
          </div>

          <div className="hero-emoji">
            🧠
          </div>

        </div>

        {/* QUICK ACTIONS */}

        <div className="section-title-row">

          <div>
            <p className="page-label">
              QUICK ACTIONS
            </p>

            <h2>
              What do you want to do?
            </h2>
          </div>

        </div>

        <div className="quick-actions">

          <button
            className="action-card"
            onClick={() => setActiveTab("quiz")}
          >
            <span>🧠</span>
            <strong>Take a Quiz</strong>
            <small>
              Test your knowledge
            </small>
          </button>

          <button
            className="action-card"
            onClick={() => setActiveTab("learning")}
          >
            <span>📚</span>
            <strong>Learn</strong>
            <small>
              Build your knowledge
            </small>
          </button>

          <button
            className="action-card"
            onClick={() => setActiveTab("plan")}
          >
            <span>📅</span>
            <strong>Study Plan</strong>
            <small>
              Your adaptive plan
            </small>
          </button>

          <button
            className="action-card"
            onClick={() => setActiveTab("mentor")}
          >
            <span>🤖</span>
            <strong>AI Mentor</strong>
            <small>
              Ask your learning AI
            </small>
          </button>

          <button
            className="action-card"
            onClick={() => setActiveTab("exam")}
          >
            <span>🎯</span>
            <strong>Exam Readiness</strong>
            <small>
              Check your readiness
            </small>
          </button>

          {/* UNIQUE FEATURE */}

          <button
            className="action-card forecast-action"
            onClick={() => setActiveTab("forecast")}
          >
            <span>🔮</span>
            <strong>
              Learning Time Machine
            </strong>
            <small>
              Predict your future progress
            </small>
          </button>

        </div>

        {/* UNIQUE FEATURE BANNER */}

        <div
          className="forecast-home-banner"
          onClick={() => setActiveTab("forecast")}
        >

          <div className="forecast-banner-icon">
            🔮
          </div>

          <div>
            <span>
              NEW • STUDYTWIN PREDICTION
            </span>

            <h3>
              Where will your learning take you?
            </h3>

            <p>
              See your predicted knowledge score
              after 7 days of focused learning.
            </p>
          </div>

          <div className="forecast-banner-arrow">
            →
          </div>

        </div>

        {/* STATS */}

        <div className="home-stats">

          <div>
            <strong>
              {quizResults.length}
            </strong>

            <span>
              Questions
            </span>
          </div>

          <div>
            <strong>
              {quizResults.filter(
                (item) => item.correct
              ).length}
            </strong>

            <span>
              Correct
            </span>
          </div>

          <div>
            <strong>
              7 🔥
            </strong>

            <span>
              Day Streak
            </span>
          </div>

        </div>

      </div>
    </AppLayout>
  );
}

/* =========================
   APP LAYOUT
========================= */

function AppLayout({
  children,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="app-shell">

      <main className="app-content">
        {children}
      </main>

      <nav className="bottom-nav">

        <button
          className={
            activeTab === "home"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("home")
          }
        >
          <span>🏠</span>
          Home
        </button>

        <button
          className={
            activeTab === "subjects"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("subjects")
          }
        >
          <span>📚</span>
          Subjects
        </button>

        <button
          className={
            activeTab === "twin"
              ? "active twin-nav"
              : "twin-nav"
          }
          onClick={() =>
            setActiveTab("twin")
          }
        >
          <span>🧠</span>
          Twin
        </button>

        <button
          className={
            activeTab === "progress"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("progress")
          }
        >
          <span>📊</span>
          Progress
        </button>

        <button
          className={
            activeTab === "profile"
              ? "active"
              : ""
          }
          onClick={() =>
            setActiveTab("profile")
          }
        >
          <span>👤</span>
          Profile
        </button>

      </nav>

    </div>
  );
}

export default App;