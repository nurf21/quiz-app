import Timer from "./Timer";

export default function QuestionCard({
  q,
  index,
  total,
  selectedIndex,
  onSelect,
  showAnswer,
  useTimer,
  timeLeft,
}) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg max-w-xl w-full">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm bg-gray-700 px-3 py-1 rounded-full">
          Question {index + 1} / {total}
        </span>
        {useTimer && <Timer seconds={timeLeft} />}
      </div>

      <h2 className="text-xl font-semibold mb-4">{q.question}</h2>

      <div className="space-y-2">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correctIndex;
          const isSelected = i === selectedIndex;

          let classes =
            "w-full text-left px-4 py-2 rounded-md border transition-colors ";
          if (showAnswer) {
            if (isCorrect) classes += "bg-green-600 border-green-500";
            else if (isSelected && !isCorrect)
              classes += "bg-red-600 border-red-500";
            else classes += "bg-gray-700 border-gray-600";
          } else {
            classes += "bg-gray-700 border-gray-600 hover:bg-gray-600";
          }

          return (
            <button
              key={i}
              className={classes}
              onClick={() => onSelect(i)}
              disabled={showAnswer}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {showAnswer && (
        <div className="mt-4 p-3 rounded bg-gray-700 border border-gray-600 text-sm">
          {selectedIndex === q.correctIndex ? (
            <span className="text-green-400 font-semibold">Correct! 🎉</span>
          ) : (
            <span className="text-red-400 font-semibold">Incorrect.</span>
          )}
          <div className="text-gray-300 mt-1">
            Correct answer: <strong>{q.options[q.correctIndex]}</strong>
          </div>
          {q.explanation && (
            <p className="text-gray-400 mt-1">{q.explanation}</p>
          )}
        </div>
      )}
    </div>
  );
}
