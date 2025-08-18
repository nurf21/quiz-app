import QuestionCard from "./components/QuestionCard";
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
    </>
  );
}

export default App;
