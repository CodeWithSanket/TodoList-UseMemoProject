import { useCallback, useState } from "react";
import TodoContext from "../Context/TodoContext";
import TodoList from "./TodoList";

export default function TodoListComponent() {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodosList] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);

    const addTodoHandler = () => {
        if (inputValue.trim() !== "") {
            setTodosList((prevTodos) => [
                ...prevTodos,
                { id: prevTodos.length + 1, todoText: inputValue, isCompleted: isCompleted }
            ]);
            setInputValue("");
        }
    }

    const sortListHandler = () => {
        const sortedTodos = [...todoList].sort((a, b) => {
            if (a.isCompleted === b.isCompleted) return 0;
            return a.isCompleted ? 1 : -1;
        });
        setTodosList(sortedTodos);
    }

    const toggleIsCompleteText = (id) => {
        console.log(id);
        const updatedTodos = todoList.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
        });
        setTodosList(updatedTodos);
    };



    const MemoizedAddTodoHandler = useCallback(addTodoHandler, [inputValue, isCompleted]);
    const MemoizedSortListHandler = useCallback(sortListHandler, [todoList, setTodosList])
    const MemoizedToggleIsComponent = useCallback(toggleIsCompleteText, [])



    return (
        <TodoContext.Provider value={{ todoList, setTodosList, setIsCompleted, MemoizedToggleIsComponent }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "40px",
                fontFamily: "Arial, sans-serif"
            }}>
                <h1 style={{ marginBottom: "20px", color: "#333" }}>My Todo App</h1>
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type='text'
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        placeholder="Enter a task..."
                        style={{
                            padding: "10px",
                            width: "250px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            marginRight: "8px"
                        }}
                    />
                    <button
                        onClick={MemoizedAddTodoHandler}
                        style={{
                            padding: "10px 16px",
                            margin: "4px",
                            cursor: "pointer",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "5px"
                        }}
                    >
                        Add Todo
                    </button>
                    <button
                        onClick={MemoizedSortListHandler}
                        style={{
                            padding: "10px 16px",
                            margin: "4px",
                            cursor: "pointer",
                            backgroundColor: "#008CBA",
                            color: "white",
                            border: "none",
                            borderRadius: "5px"
                        }}
                    >
                        Sort
                    </button>
                </div>
                <div style={{ width: "300px" }}>
                    {todoList.length > 0 ? <TodoList /> : <p>No todos yet!</p>}
                </div>
            </div>
        </TodoContext.Provider>
    )
}