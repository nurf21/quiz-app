import { useEffect, useRef, useState } from "react";
import { quizData } from "./data/quizData";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";

export default function App() {
  const [phase, setPhase] = useState("start"); // start | quiz | result
  const [useTimer, setUseTimer] = useState(true);

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [results, setResults] = useState([]);

  const timerRef = useRef(null);

  const total = quizData.length;
  const currentQ = quizData[idx];

  const handleStart = () => {
    setPhase("quiz");
    setIdx(0);
    setScore(0);
    setResults([]);
    setSelectedIndex(null);
    setShowAnswer(false);
    setTimeLeft(60);
  };

  const handleRestart = () => setPhase("start");

  const handleSelect = (i) => {
    if (showAnswer) return;
    setSelectedIndex(i);
    setShowAnswer(true);
    if (i === currentQ.correctIndex) setScore((s) => s + 1);

    setResults((prev) => [
      ...prev,
      {
        question: currentQ.question,
        options: currentQ.options,
        correctIndex: currentQ.correctIndex,
        selectedIndex: i,
      },
    ]);

    setTimeout(() => goNext(), 1000);
  };

  const handleTimeout = () => {
    if (showAnswer) return;
    setSelectedIndex(null);
    setShowAnswer(true);
    setScore((s) => s - 1);

    setResults((prev) => [
      ...prev,
      {
        question: currentQ.question,
        options: currentQ.options,
        correctIndex: currentQ.correctIndex,
        selectedIndex: null,
      },
    ]);

    setTimeout(() => goNext(), 1000);
  };

  const goNext = () => {
    if (idx + 1 >= total) {
      setPhase("result");
      return;
    }
    setIdx((n) => n + 1);
    setSelectedIndex(null);
    setShowAnswer(false);
    setTimeLeft(60);
  };

  useEffect(() => {
    if (phase !== "quiz" || !useTimer) return;
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, idx, useTimer]);

  useEffect(() => {
    if (showAnswer && timerRef.current) clearInterval(timerRef.current);
  }, [showAnswer]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      {phase === "start" && (
        <StartScreen
          onStart={handleStart}
          useTimer={useTimer}
          setUseTimer={setUseTimer}
        />
      )}
      {phase === "quiz" && (
        <QuestionCard
          q={currentQ}
          index={idx}
          total={total}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          showAnswer={showAnswer}
          useTimer={useTimer}
          timeLeft={timeLeft}
        />
      )}
      {phase === "result" && (
        <ResultScreen
          results={results}
          score={score}
          total={total}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
