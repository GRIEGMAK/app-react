import React from 'react';
import './../styles/App.css';
import Forma from './Forma';
import { observer } from 'mobx-react';
import store from './../store';
import Card from './Card';

const App = () => {
  const { addNewCard, card, changeCheck, removeCard, filtering, filterArray } = store
  const [task, setTask] = React.useState('')
  let filterLet = 2
  const filterChange = (fillet) => {
    filterLet = fillet
    filtering(fillet)
  }
  let getCardArray = undefined
  if (card) {
    getCardArray = filterArray.map((c, i) => <Card key={i} id={i + 1} {...c} changeCheck={changeCheck} removeCard={removeCard} />)
  }
  return (
    <div className="wrapper">
      <div className="wpapperPadding">
        <Forma className="wrapperForm" task={task} setTask={setTask} addNewCard={addNewCard}  filterChange={filterChange}/>
        <div>
          <h1 className="titleProblem wrapper">Список задач:</h1>
          <div onClick={() => filterChange(0)}>Выполненные</div>
          <div onClick={() => filterChange(1)}>Невыполненные</div>
          <div onClick={() => filterChange(2)}>Все задачи</div>
        </div>
        {getCardArray}
      </div>
    </div>
  );
}

export default observer(App);