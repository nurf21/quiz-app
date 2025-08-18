import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import StartScreen from "./components/StartScreen";

function App() {
  return (
    <>
      <StartScreen />
      <QuestionCard
        q={{
          question: "What does HTML stand for?",
          options: ["HyperText Markup Language", "HighText Machine Language"],
          correctIndex: 0,
        }}
        index={0}
        total={10}
        selectedIndex={null}
        onSelect={() => {}}
        showAnswer={false}
        useTimer={true}
        timeLeft={60}
      />
      <ResultScreen
        results={[
          {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "HighText Machine Language"],
            selectedIndex: 0,
            correctIndex: 0,
          },
        ]}
        score={1}
        total={1}
        onRestart={() => {}}
      />
    </>
  );
}

export default App;
