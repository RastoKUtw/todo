import { v4 as uuidv4 } from 'uuid';

const form = ({ setTodoState, todoState, setInputText, inputText, setstate }) => {
    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    };
    const sumitHandler = (e) => {
        e.preventDefault();
        setTodoState([
            { text: inputText, completed: false, id: uuidv4() },
            ...todoState
        ])
        setInputText("");
    };
    const statusHandler = (e) => {
        setstate(e.target.value)
    }
    return (
        <form>
            <input type="text"
                className="todo-input"
                onChange={inputTextHandler}
                value={inputText}
            />
            <button
                className="todo-button"
                type="submit"
                onClick={sumitHandler}
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">查看全部</option>
                    <option value="completed">完成</option>
                    <option value="uncompleted">未完成</option>
                </select>
            </div>
        </form>
    )
}
export default form;