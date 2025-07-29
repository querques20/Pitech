import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import greetings from "./Utils/greetings";
import Count from "./Components/counter";
import TabTitle from "./Components/tabTitle";
import ThemeToggle from "./Components/ThemeToggle";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
  const saludo = greetings();
  return (
    <>
      <ThemeProvider>
        <Header
          title="Pitech Store"
          subtitle={`Todo el hardware que necesitas, ${saludo}`}
        />

        <ThemeToggle />
        <TabTitle />
        <Count />
      </ThemeProvider>
    </>
  );
}
