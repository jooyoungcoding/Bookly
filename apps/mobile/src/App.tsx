import { useCallback, useState } from "react";
import { WelcomeScreen } from "./features/shared/components/WelcomeScreen";
import { HomeScreen } from "./features/library/screens/HomeScreen";
import "./App.css";

type Screen = "welcome" | "home";

function App() {
  const [screen, setScreen] = useState<Screen>("welcome");

  const handleWelcomeComplete = useCallback(() => {
    setScreen("home");
  }, []);

  if (screen === "welcome") {
    return <WelcomeScreen onComplete={handleWelcomeComplete} />;
  }

  return <HomeScreen />;
}

export default App;
