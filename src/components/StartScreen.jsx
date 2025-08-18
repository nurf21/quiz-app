export default function StartScreen({ onStart, useTimer, setUseTimer }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg max-w-xl w-full">
      <h1 className="text-2xl font-bold mb-2">Web Dev Basics Quiz</h1>
      <p className="text-gray-300 mb-4">
        Test your fundamentals of HTML, CSS, and JavaScript. You’ll get instant
        feedback after each question.
      </p>

      <ul className="list-disc list-inside text-gray-400 mb-4 space-y-1">
        <li>Answers highlight green for correct, red for incorrect.</li>
        <li>+1 point for correct answers, −1 if you run out of time.</li>
      </ul>

      <div className="flex items-center gap-2 mb-4">
        <input
          id="timer-toggle"
          type="checkbox"
          checked={useTimer}
          onChange={(e) => setUseTimer(e.target.checked)}
          className="w-4 h-4 accent-blue-500"
        />
        <label htmlFor="timer-toggle" className="text-sm text-gray-300">
          1-minute timer per question
        </label>
      </div>

      <button
        onClick={onStart}
        className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-md font-semibold"
      >
        Start Quiz
      </button>
    </div>
  );
}
