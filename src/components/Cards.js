import React from 'react';

const Cards = ({tittle, item1, item2, item3, background}) => {

    const ShowTittle =(msj) =>alert(msj)
    return (
        <div className='data data4' style={{background}} onclick={()=> ShowTittle(tittle)}>
           <ul>
          <h3> {tittle} </h3>
          <li>  {item1} </li>
          <li>  {item2} </li>
          <li>  {item3} </li>
        </ul>
        </div>
    );
};

export default Cards;