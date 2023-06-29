import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Notes />
      <Footer />
    </>
  );
}

export default App;
