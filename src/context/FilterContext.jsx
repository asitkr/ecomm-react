import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductContext } from './ProductContext';
import reducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value: "lowest",
}

const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();

    const  [state, dispatch] = useReducer(reducer, initialState);

    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    }

    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    }

    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }

    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS", payload: products });
    }, [state.sorting_value])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext);
}

export { FilterContextProvider, useFilterContext };