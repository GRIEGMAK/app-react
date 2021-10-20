import React from 'react';
import './../styles/Card.css';

const Card = (props) => {
   const { problem, id, changeCheck, completed, removeCard } = props
   const [check, setCheck] = React.useState(completed)
   const CheckChange = () => {
      changeCheck(id)
      setCheck(!check)
   }
   return (
      <div className="card_container" name="checkbox" >
         {completed}
         {problem} <input type="checkbox" checked={false} onChange={CheckChange} /> <button onClick={() => { removeCard(id) }}>delete</button>
      </div>
   );
}

export default Card;
