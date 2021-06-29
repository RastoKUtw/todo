import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./componments/Form";
import Todolist from "./componments/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoState, setTodoState] = useState([]);
  const [state, setstate] = useState('all')
  const [filtods, setFiltods] = useState([])

  useEffect(()=>{
    const getLocal = () => {
      if (localStorage.getItem('todoState') === null) {
        localStorage.setItem('todoState', JSON.stringify([]))
      } else {
        let todoDate= JSON.parse(localStorage.getItem('todoState'));
        setTodoState(todoDate);
      }
    }
    getLocal();
  },[])

  useEffect(() => {

    const saveLocal = () => {
        localStorage.setItem('todoState', JSON.stringify(todoState))
      }

    const filterHandler = () => {
      switch (state) {
        case 'completed':
          setFiltods(todoState.filter(t => t.completed === true))
          break;
        case 'uncompleted':
          setFiltods(todoState.filter(t => t.completed === false))
          break;
        default:
          setFiltods(todoState)
          break;
      }
    }
    
    filterHandler();
    saveLocal();
  }, [todoState, state])


  return (
    <div className="App">
      <header>
        <h1>待辦清單</h1>
      </header>
      <Form
        setTodoState={setTodoState}
        todoState={todoState}
        setInputText={setInputText}
        inputText={inputText}
        setstate={setstate}

      />
      <Todolist
        filtods={filtods}
        todoState={todoState}
        setTodoState={setTodoState}
      />
    </div>
  );
};

export default App;