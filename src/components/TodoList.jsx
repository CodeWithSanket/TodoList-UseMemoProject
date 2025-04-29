import { memo, useContext } from "react";
import Todo from "./Todo.jsx";
import TodoContext from "../Context/TodoContext.jsx";


const TodoList = () => {
    const { todoList, MemoizedToggleIsComponent } = useContext(TodoContext);


    return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
            {todoList.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    todoText={todo.todoText}
                    isCompleted={todo.isCompleted}
                    toggleIsCompleteText={MemoizedToggleIsComponent}
                />
            ))}
        </ul>
    );
};

export default memo(TodoList);
