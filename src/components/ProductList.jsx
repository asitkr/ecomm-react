import React from 'react';
import { useFilterContext } from '../context/FilterContext';
import GridView from './GridView';
import ListView from './ListView';

// grid_view

const ProductList = () => {
    const { filter_products, setGridView, grid_view } = useFilterContext();
    // console.log(filter_products);

    if(grid_view === true){
        return <GridView products={filter_products} />
    }

    // if(setGridView === false) {
    //     return <ListView products={filter_products} />
    // }
}

export default ProductList;