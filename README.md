# 📝 Browser Quiz App

A browser-based multiple-choice quiz application built with **React** and **Tailwind CSS**.
The app presents users with a series of quiz questions, gives **immediate feedback**, and shows detailed **results with explanations** at the end.

---

## ✨ Features

- 🎮 **Start screen** with quiz details and start button
- ❓ **Multiple-choice questions** presented as cards
- ✅ Immediate feedback on answers (green for correct, red for incorrect)
- 📊 **Score tracking** throughout the quiz
- ⏱️ Optional **1-minute timer per question** (with penalty if unanswered)
- 📖 **Explanations** for each question to enhance learning
- 📝 **Result screen** with:

  - Color-coded answers
  - Correct/incorrect indicators (✅ ❌)
  - Scrollable review list with explanations
  - Restart button

---

## 🚀 Live Demo

📍 **[View it here](https://nurf21.github.io/quiz-app/)**

---

## 📂 Project Structure

```
src/
 ├── components/
 │   ├── QuestionCard.jsx
 │   ├── ResultScreen.jsx
 │   ├── StartScreen.jsx
 │   └── Timer.jsx
 ├── data/
 │   └── quizData.js   # JSON-based quiz questions with explanations
 ├── App.jsx
 ├── index.css
 └── main.jsx
```

---

## 🛠️ Tech Stack

- [React](https://react.dev/) – UI library
- [Tailwind CSS](https://tailwindcss.com/) – utility-first styling
- [Vite](https://vite.dev/) – build tool

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nurf21/quiz-app
cd quiz-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📚 Future Enhancements

- 🔄 Shuffle questions & answers
- 🏆 High scores / leaderboard
- 🌙 Dark mode toggle
- 📱 Improved mobile UI

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).
