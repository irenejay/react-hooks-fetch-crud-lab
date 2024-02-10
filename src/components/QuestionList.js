import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion }) {
  return (
    <div>
      <h1>Question List</h1>
      <ul>
        {questions.map(question => (
          <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} />
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
