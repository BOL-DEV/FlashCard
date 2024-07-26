import { useState } from "react";
import "./style.css";

const questions = [
  {
    id: 3457,
    question: "What Language is React based on",
    answer: "Javascript",
  },
  {
    id: 7335,
    question: "What are the building blocks of react App",
    answer: "Component",
  },
  {
    id: 7583,
    question: "What's the name of the syntax we use to describe a UI in React",
    answer: "JSX",
  },
  {
    id: 3497,
    question: "How to pass data from parent to child components",
    answer: "Props",
  },
  {
    id: 3057,
    question: "How to give components memory",
    answer: "useState hooks",
  },
  {
    id: 3407,
    question:
      "What do we call an input element that is completely synchronised with state",
    answer: "Controlled element",
  },
];
function App() {
  const [selectedID, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id !== selectedID ? id : null);
  };

  return (
    <div className="container">
      {questions.map((question) => (
        <p
          key={question.id}
          className={question.id === selectedID ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          {question.id === selectedID ? question.answer : question.question}
        </p>
      ))}
    </div>
  );
}

export default App;
