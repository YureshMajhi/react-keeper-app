import "./App.css";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [note, setNote] = useState([]);

  const handleClick = (title, content) => {
    setNote((prevValue) => {
      return [
        ...prevValue,
        {
          id: crypto.randomUUID(),
          title: title,
          content: content,
        },
      ];
    });
  };

  const handleDelete = (id) => {
    console.log(id);
  };
  return (
    <>
      <Header />
      <Form handleClick={handleClick} />
      <Notes note={note} handleDelete={handleDelete} />
      <Footer />
    </>
  );
}

export default App;
