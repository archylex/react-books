import React, { useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../redux/Slices/cartSlice';

function BookBlock ({id, title, price, imageUrl, version, types}) {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cartSlice);
    const bookTypes = ['бумажная', 'электронная'];

    const [bookCount, setBookCount] = useState(0);
    const [activeVer, setActiveVer] = useState(0);
    const [activeType, setActiveType] = useState(0);

    const addBookClick = () => setBookCount(bookCount + 1);
    let count = 0;
    const cItem = items.find(item => item.id === id)
      if (cItem)
      count =  cItem.count ;
    

    const onClickAdd = () => {
      const item = {
        id, 
        title,
        price,
        imageUrl, 
        count,
      }
      
      //addBookClick();
      dispatch(addProduct(item));
    }

    return (
        <div className="book-block">
  <img
    className="book-block__image" src={imageUrl} alt="Book" />
  <h4 className="book-block__title">{title}</h4>
  <div className="book-block__selector">
    <ul>
        {
            types.map( (t) => (<li key={t} onClick={()=>setActiveType(t)} className={activeType === t ? 'active' : ''}>{bookTypes[t]}</li>))
        }      
    </ul>
    <ul>
        {
            version.map((v, i) => (<li key={i} onClick={()=>setActiveVer(i)} className={activeVer === i ? 'active' : ''}>{v}</li>))
        }    
    </ul>
  </div>
  <div className="book-block__bottom">
    <div className="book-block__price">{price} ₽</div>
    <div className="button button--outline button--add" onClick={onClickAdd}>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
          fill="white"
        />
      </svg>
      <span>Добавить</span>
      <i>{count}</i>
    </div>
  </div>
</div> 
    );
}

export default BookBlock;