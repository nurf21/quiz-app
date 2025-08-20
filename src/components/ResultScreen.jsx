export default function ResultScreen({ score, total, results, onRestart }) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg max-w-2xl w-full h-[80vh] flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Quiz Finished 🎉</h2>
      <p className="mb-4 text-lg">
        Your Score: <span className="font-semibold">{score}</span> / {total}
      </p>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700">
        {results.map((r, i) => {
          const isCorrect = r.selectedIndex === r.correctIndex;

          return (
            <div
              key={i}
              className="p-4 rounded-lg bg-gray-700 border border-gray-600"
            >
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                {i + 1}. {r.question}
                {isCorrect ? (
                  <span className="text-green-400 font-bold">✅ Correct</span>
                ) : (
                  <span className="text-red-400 font-bold">❌ Incorrect</span>
                )}
              </h3>

              <div className="space-y-1 mb-2">
                {r.options.map((opt, j) => {
                  const isAnswer = j === r.correctIndex;
                  const isSelected = j === r.selectedIndex;

                  let classes =
                    "block w-full text-left px-3 py-1 rounded border ";
                  if (isAnswer) classes += "bg-green-600 border-green-500";
                  else if (isSelected && !isAnswer)
                    classes += "bg-red-600 border-red-500";
                  else classes += "bg-gray-600 border-gray-500";

                  return (
                    <div key={j} className={classes}>
                      {opt}
                    </div>
                  );
                })}
              </div>

              <div className="text-sm text-gray-300">
                <span className="font-semibold">Explanation: </span>
                {r.explanation || "No explanation provided."}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onRestart}
        className="mt-6 bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-semibold self-center"
      >
        Restart Quiz
      </button>
    </div>
  );
}
