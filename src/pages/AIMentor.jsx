import { useState } from "react";
import "./AIMentor.css";

function AIMentor({ quizResults = [] }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi! 👋 I'm your StudyTwin AI Mentor. Ask me anything about your studies, or choose one of the quick actions below.",
    },
  ]);

  const [input, setInput] = useState("");

  const getWeakTopic = () => {
    if (quizResults.length === 0) {
      return "DBMS";
    }

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

    const topics = Object.entries(topicMap);

    topics.sort((a, b) => {
      const scoreA =
        a[1].correct / a[1].total;

      const scoreB =
        b[1].correct / b[1].total;

      return scoreA - scoreB;
    });

    return topics.length > 0
      ? topics[0][0]
      : "DBMS";
  };

  const generateResponse = (question) => {
    const text = question.toLowerCase();

    const weakTopic = getWeakTopic();

    if (
      text.includes("weak") ||
      text.includes("improve")
    ) {
      return `Based on your learning activity, I recommend focusing more on ${weakTopic}. 🎯 Start with the basic concepts, then solve a few practice questions.`;
    }

    if (
      text.includes("today") ||
      text.includes("study plan")
    ) {
      return `For today, I recommend a focused session on ${weakTopic}. 📚 Spend 20 minutes learning the concepts, 15 minutes practicing questions, and 10 minutes reviewing your mistakes.`;
    }

    if (
      text.includes("python")
    ) {
      return `Python functions are reusable blocks of code. 🐍 They help you organize your program and avoid repeating the same code.

Example:

def greet(name):
    return "Hello " + name

You can call it using:

greet("Srijita")`;
    }

    if (
      text.includes("machine learning") ||
      text.includes("ml")
    ) {
      return `Machine Learning is a part of AI where computers learn patterns from data instead of being explicitly programmed for every situation. 🤖

The basic flow is:

Data → Training → Model → Prediction`;
    }

    if (
      text.includes("dbms") ||
      text.includes("database")
    ) {
      return `DBMS stands for Database Management System. 🗄️ It is software used to store, organize, retrieve and manage data.

Examples include MySQL, PostgreSQL and Oracle.

Important DBMS topics:
• SQL
• Keys
• Normalization
• Transactions
• Joins`;
    }

    if (
      text.includes("question") ||
      text.includes("quiz") ||
      text.includes("practice")
    ) {
      return `Here are 5 quick practice questions for you 📝:

1. What is a primary key?
2. What is normalization?
3. What is a foreign key?
4. What is a SQL JOIN?
5. What is a transaction?

Try answering them without looking at your notes!`;
    }

    if (
      text.includes("javascript") ||
      text.includes("js")
    ) {
      return `JavaScript is a programming language mainly used to create interactive web applications. ⚡

Important concepts include:

• Variables
• Functions
• Arrays
• Objects
• Promises
• Async/Await
• DOM`;
    }

    if (
      text.includes("hello") ||
      text.includes("hi")
    ) {
      return "Hello! 👋 I'm ready to help you learn. Ask me about Python, DBMS, AI/ML, JavaScript, your study plan, or your weak areas.";
    }

    return `That's a great question! 🧠

As your StudyTwin Mentor, I recommend breaking the topic into smaller concepts, learning one concept at a time, and then testing yourself.

You can also ask me:

• "What should I study today?"
• "What am I weak in?"
• "Explain Python"
• "Explain DBMS"
• "Explain machine learning"
• "Give me practice questions"`;
  };

  const sendMessage = (customMessage = null) => {
    const question =
      customMessage || input.trim();

    if (!question) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: question,
    };

    const aiMessage = {
      id: Date.now() + 1,
      sender: "ai",
      text: generateResponse(question),
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
      aiMessage,
    ]);

    setInput("");
  };

  return (
    <div className="mentor-page">

      <div className="mentor-header">

        <div className="mentor-avatar">
          🤖
        </div>

        <div>
          <p className="page-label">
            AI Learning Assistant
          </p>

          <h1>
            StudyTwin Mentor
          </h1>

          <span className="online-status">
            ● Online
          </span>
        </div>

      </div>


      <div className="mentor-intro">

        <span>
          🧠
        </span>

        <div>

          <strong>
            Your personal AI study partner
          </strong>

          <p>
            Ask questions, understand difficult
            concepts and get personalized study
            guidance.
          </p>

        </div>

      </div>


      <div className="quick-prompts">

        <button
          onClick={() =>
            sendMessage(
              "What should I study today?"
            )
          }
        >
          🎯 What should I study?
        </button>

        <button
          onClick={() =>
            sendMessage(
              "What am I weak in?"
            )
          }
        >
          📊 Find my weak topic
        </button>

        <button
          onClick={() =>
            sendMessage(
              "Explain machine learning"
            )
          }
        >
          🤖 Explain ML
        </button>

        <button
          onClick={() =>
            sendMessage(
              "Give me practice questions"
            )
          }
        >
          📝 Practice questions
        </button>

      </div>


      <div className="chat-box">

        <div className="messages">

          {messages.map((message) => (

            <div
              key={message.id}
              className={
                message.sender === "user"
                  ? "message user-message"
                  : "message ai-message"
              }
            >

              {message.sender === "ai" && (
                <div className="message-avatar">
                  🤖
                </div>
              )}

              <div className="message-content">
                {message.text}
              </div>

            </div>

          ))}

        </div>


        <div className="chat-input-area">

          <input
            type="text"
            placeholder="Ask StudyTwin anything..."
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button
            onClick={() => sendMessage()}
          >
            ➤
          </button>

        </div>

      </div>

    </div>
  );
}

export default AIMentor;