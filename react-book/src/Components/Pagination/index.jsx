import React from "react";
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

export const Pagination = ({numPages, onChangePage}) => {    
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={e=>onChangePage(e.selected)}
            pageRangeDisplayed={4}
            pageCount={numPages}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
}