import { useRef } from "react";
import Header from "./components/header";
import MainPage from "./components/mainPage";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const theme = useRef(null);
  const toggleTheme = (value) => {
    if (value) {
      theme.current.classList.remove("theme-light");
      theme.current.classList.add("theme-dark");
    } else {
      theme.current.classList.add("theme-light");
      theme.current.classList.remove("theme-dark");
    }
  };
  console.log("app");

  return (
    <div className="App">
      <div className="theme-dark" ref={theme}>
        <Header toggleTheme={toggleTheme} />
        <MainPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
