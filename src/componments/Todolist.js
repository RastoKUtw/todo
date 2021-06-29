import Todo from './Todo'

const List = ({ todoState, setTodoState, filtods }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtods.map(todo => (
                    <Todo
                        todoState={todoState}
                        setTodoState={setTodoState}
                        key={todo.id}
                        text={todo.text}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}
export default List;