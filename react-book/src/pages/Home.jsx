import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setPage, setFilters } from '../redux/Slices/filterSlice';
import { } from '../redux/Slices/bookSlice';

import Categories from '../Components/Categories';
import Sort from '../Components/Sort';
import BookBlock from '../Components/BookBlock';
import Skeleton from '../Components/BookBlock/Skeleton';
import { Pagination } from "../Components/Pagination";

export const Home = ({searchValue}) => {
  const {category, sort, page } = useSelector(state => state.filterSlice);
  const dispatch = useDispatch();

  const booksData = useSelector(state => state.bookSlice.items)

  const onChangeCategory = (id) => {
    dispatch(setCategory(id));
  }

  const onChangePage = number => {
    dispatch(setPage(number));
  }
  
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [numPages, setNumPages] = React.useState(1);
   
  const numOnPage = 4;


  React.useEffect(()=>{
    setIsLoading(true);
    const catFilter = category === 0 ? '' : '&category=' + category;
    const sortFilter = sort.prop.replace('-', '');
    const orderFilter = sort.prop.includes('-') ? 'desc' : 'asc';

        axios.get('https://632ca2eb5568d3cad889f40f.mockapi.io/items?sortBy='+sortFilter+'&order=' + orderFilter + catFilter)
        .then(res => {
          setItems(res.data);
          setIsLoading(false);
          setNumPages(res.data.length/numOnPage);
    });        
        
        window.scrollTo(0,0);
    }, [category, sort.prop, page]);


      const aBooks = items.filter(obj=>{
        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
          return true;
        }
        return false;
      }).map(obj=> (<BookBlock key={obj.id} {...obj}/>))

    return (
        <>
          <div className="content__top">
            <Categories value={category} onClickAction={onChangeCategory}/>
            <Sort />
          </div>
          <h2 className="content__title">Все книги</h2>
          <div className="content__items">
            {
              isLoading 
                ? [...new Array(8)].map((_, i) => <Skeleton key={i}/>) 
                : aBooks 
            }                       
          </div>
       
          <Pagination numPages={numPages} onChangePage={(num=>onChangePage(num))}/>
        
      </>       
    );
};