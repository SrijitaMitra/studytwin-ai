import { useState } from "react";
import "./Profile.css";

function Profile() {
  const [profile, setProfile] = useState(() => {
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

  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });

    setSaved(false);
  };

  const saveProfile = () => {
    localStorage.setItem(
      "studytwin_profile",
      JSON.stringify(profile)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="profile-page">

      {/* Header */}

      <div className="profile-header">
        <p className="page-label">
          Your Learning Identity
        </p>

        <h1>👤 My Profile</h1>

        <p>
          Tell StudyTwin how you like to learn.
        </p>
      </div>


      {/* Profile Card */}

      <section className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <div>
          <h2>{profile.name}</h2>

          <p>
            StudyTwin Learner
          </p>
        </div>

      </section>


      {/* Personal Information */}

      <section className="profile-section">

        <h2>Personal Information</h2>

        <div className="profile-field">

          <label>
            Your Name
          </label>

          <input
            type="text"
            value={profile.name}
            onChange={(e) =>
              handleChange(
                "name",
                e.target.value
              )
            }
            placeholder="Enter your name"
          />

        </div>


        <div className="profile-field">

          <label>
            Career / Learning Goal
          </label>

          <input
            type="text"
            value={profile.goal}
            onChange={(e) =>
              handleChange(
                "goal",
                e.target.value
              )
            }
            placeholder="Example: Become an AI Engineer"
          />

        </div>

      </section>


      {/* Learning Preferences */}

      <section className="profile-section">

        <h2>Learning Preferences</h2>


        <div className="profile-field">

          <label>
            Current Skill Level
          </label>

          <select
            value={profile.level}
            onChange={(e) =>
              handleChange(
                "level",
                e.target.value
              )
            }
          >

            <option>
              Beginner
            </option>

            <option>
              Intermediate
            </option>

            <option>
              Advanced
            </option>

          </select>

        </div>


        <div className="profile-field">

          <label>
            Preferred Study Time
          </label>

          <select
            value={profile.studyTime}
            onChange={(e) =>
              handleChange(
                "studyTime",
                e.target.value
              )
            }
          >

            <option>
              Morning
            </option>

            <option>
              Afternoon
            </option>

            <option>
              Evening
            </option>

            <option>
              Night
            </option>

          </select>

        </div>


        <div className="profile-field">

          <label>
            Daily Study Goal
          </label>

          <select
            value={profile.dailyGoal}
            onChange={(e) =>
              handleChange(
                "dailyGoal",
                Number(e.target.value)
              )
            }
          >

            <option value={30}>
              30 minutes
            </option>

            <option value={45}>
              45 minutes
            </option>

            <option value={60}>
              1 hour
            </option>

            <option value={90}>
              1.5 hours
            </option>

            <option value={120}>
              2 hours
            </option>

          </select>

        </div>

      </section>


      {/* StudyTwin Personalization */}

      <section className="twin-profile-card">

        <div className="twin-profile-icon">
          🧠
        </div>

        <div>

          <h3>
            StudyTwin Personalization
          </h3>

          <p>
            StudyTwin will use your learning
            preferences together with your
            quiz performance to create a
            personalized learning experience.
          </p>

        </div>

      </section>


      {/* Save Button */}

      <button
        className="save-profile-button"
        onClick={saveProfile}
      >
        {saved
          ? "✓ Profile Saved"
          : "Save Profile"}
      </button>

    </div>
  );
}

export default Profile;