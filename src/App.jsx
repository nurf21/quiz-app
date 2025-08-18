import StartScreen from "./components/StartScreen";
import Timer from "./components/Timer";

function App() {
  return (
    <>
      <StartScreen />
      <Timer seconds={60} />
    </>
  );
}

export default App;
