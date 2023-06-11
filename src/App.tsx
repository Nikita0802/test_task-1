import React, { useState } from 'react';
import './styles.css';
import DeleteIcon from './img/delete.svg';
import ArrowIcon from './img/arrow.svg'

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ text: string; complete: boolean }[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, complete: false }]);
      setInputValue('');
    }
  };

  const removeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleTaskStatus = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].complete = !updatedTodos[index].complete;
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <h1>Todo List Nikita</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={addTodo}
        placeholder='Введите текст'
      />
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className='todoList'>
            <span
              className={`checkmark ${todo.complete ? 'checked' : ''}`}
              onClick={() => toggleTaskStatus(index)}
            ><img src={ArrowIcon} alt="" /></span>
            <span
              className={`task ${todo.complete ? 'checked' : ''}`}
              onClick={() => toggleTaskStatus(index)}
            >
              {todo.text}
            </span>
            <button className="delete-button" onClick={() => removeTodo(index)}>
              <img className="delete-icon" src={DeleteIcon} alt="" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

