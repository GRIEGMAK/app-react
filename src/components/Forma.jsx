import React from 'react';
import './../styles/Forma.css';

const Forma = (props) => {
   const { task, setTask, addNewCard, filterChange } = props
   const addCard = (task, setTask) => {
      filterChange(2);
      addNewCard(task, setTask);
   }
   return (
      <div>
         <input type="text" placeholder="Введите задачу" onChange={(e) => { setTask(e.target.value) }} value={task} />
         <button onClick={() => { addCard(task, setTask) }}>Добавить задачу</button>
      </div>
   );
}

export default Forma;
