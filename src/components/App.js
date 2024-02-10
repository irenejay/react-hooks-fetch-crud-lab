import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the server when the component mounts
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error("Error fetching questions:", error));
  }, []);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleQuestionSubmit = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const handleDeleteQuestion = (id) => {
    // Filter out the deleted question from the state
    const updatedQuestions = questions.filter(question => question.id !== id);
    setQuestions(updatedQuestions);
  };

  return (
    <main>
      <AdminNavBar onChangePage={handlePageChange} />
      {page === "Form" ? (
        <QuestionForm onQuestionSubmit={handleQuestionSubmit} />
      ) : (
        <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion} />
      )}
    </main>
  );
}

export default App;
