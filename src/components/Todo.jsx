import { memo } from "react";

const Todo = ({ todoText, id, isCompleted, toggleIsCompleteText, onDelete }) => {

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: isCompleted ? "#e0ffe0" : "#ffe0e0"
      }}
    >
      <span style={{
        textDecoration: isCompleted ? "line-through" : "none",
        color: isCompleted ? "green" : "red"
      }}>
        {todoText}
      </span>
      <button
        onClick={()=> toggleIsCompleteText(id)}
        style={{
          padding: "5px 10px",
          backgroundColor: isCompleted ? "#4CAF50" : "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "12px"
        }}
      >
        {isCompleted ? "Done" : "Pending"}
      </button>
      <button onClick={() => onDelete(id)}>X</button>
    </li>
  );
}

export default memo(Todo);
