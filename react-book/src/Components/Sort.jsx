import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { setSort } from '../redux/Slices/filterSlice';


function Sort() {
  const sortRef = React.useRef();
  const dispatch = useDispatch();
  const sort = useSelector(state => state.filterSlice.sort);
  const sortList = [
    {name: 'популярности (меньше-больше)', prop: 'rating'},
    {name: 'популярности (больше-меньше)', prop: '-rating'},
    {name: 'цене (дешевле-дороже)', prop: 'price'},
    {name: 'цене (дороже-дешевле)', prop: '-price'},
    {name: 'алфавиту (A-Z)', prop: 'title'},    
    {name: 'алфавиту (Z-A)', prop: '-title'}
  ];
  const [show, setShow] = React.useState(false);

  const onClickSorting = (obj) => {
    dispatch(setSort(obj))
    setShow(!show);    
  }

  React.useEffect(()=> {
    const handleClick = event => {
      const path = event.path || (event.composedPath && event.composedPath());      
      if (!path.includes(sortRef.current)){
        setShow(false);
      }      
    };
    document.body.addEventListener('click', handleClick);
    return () => {
      document.body.removeEventListener('click', handleClick);
    }
    
  }, []);

    return (
    <div ref={sortRef} className="sort">
                <div className="sort__label">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                      fill="#2C2C2C"
                    />
                  </svg>
                  <b>Сортировка по:</b>
                  <span onClick={()=>setShow(!show)}>{sort.name}</span>
                </div>

                {show && (
                <div className="sort__popup">
                  <ul>
                  {
                    sortList.map( (item, idx) => (<li key={idx} onClick={()=>onClickSorting(item)} className={sort.prop === item.prop ? 'active' : ''}>{item.name}</li>))
                  }
                  </ul>
                </div>
                )}
              </div>
              );
  }

  export default Sort;