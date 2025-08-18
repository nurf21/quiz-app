export default function ResultScreen({ results, score, total, onRestart }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg max-w-xl w-full">
      <h1 className="text-2xl font-bold mb-2">Results</h1>
      <p className="mb-4">
        Final Score: <span className="font-semibold">{score}</span> / {total}
      </p>

      <div className="space-y-3 mb-4">
        {results.map((r, idx) => {
          const correct = r.selectedIndex === r.correctIndex;
          const skipped = r.selectedIndex === null;

          return (
            <div
              key={idx}
              className={`p-3 rounded-md ${
                correct
                  ? "bg-green-700/40 border border-green-600"
                  : "bg-red-700/40 border border-red-600"
              }`}
            >
              <p className="font-medium">
                Q{idx + 1}. {r.question}
              </p>
              <p className="text-sm text-gray-300">
                {skipped ? (
                  <>Skipped (−1)</>
                ) : correct ? (
                  <>Correct ✅</>
                ) : (
                  <>Incorrect ❌</>
                )}
              </p>
              <p className="text-sm text-gray-400">
                Your answer: {skipped ? "—" : r.options[r.selectedIndex]} •
                Correct: {r.options[r.correctIndex]}
              </p>
            </div>
          );
        })}
      </div>

      <button
        onClick={onRestart}
        className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-semibold"
      >
        Restart Quiz
      </button>
    </div>
  );
}
