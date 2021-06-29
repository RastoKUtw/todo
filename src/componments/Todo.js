import React from 'react'

const Todo = ({ text, todo, todoState, setTodoState }) => {
    const deleteHandler = () => {
        setTodoState(todoState.filter((ele) => ele.id !== todo.id))
    };

    const completeHandler = () => {
        setTodoState(todoState.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                <div>
                    {text}
                </div>

                <div className="btn-container">
                    <button onClick={completeHandler} className="complete-btn">
                        <i className="fas fa-check"></i>
                    </button>

                    <button onClick={deleteHandler} className="trash-btn">
                    <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li>
        </div>
    )
}

export default Todo;