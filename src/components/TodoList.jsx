import { memo, useCallback, useContext, useMemo } from "react";
import Todo from "./Todo.jsx";
import TodoContext from "../Context/TodoContext.jsx";


const TodoList = () => {
    const { todoList, setTodosList, MemoizedToggleIsComponent } = useContext(TodoContext);

    const deleteTodoById = useCallback((id) => {
        setTodosList(prev => prev.filter(todo => todo.id !== id));
    }, [setTodosList]);
    
    const MemoizedTodoList = useMemo(() => {
        return todoList;
    }, [todoList]);


    return (
        <ul style={{ listStyleType: "none", padding: 0 }}>
            {MemoizedTodoList.map((todo) => (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    todoText={todo.todoText}
                    isCompleted={todo.isCompleted}
                    toggleIsCompleteText={MemoizedToggleIsComponent}
                    onDelete={deleteTodoById}
                />
            ))}
        </ul>
    );
};

export default memo(TodoList);
