import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    author: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setTitileFilter: (state, action) => {
            //You can mutate state thanks to Immer libtaty
            state.title = action.payload; // Изменение текущего состояния

            //You can also return new state as usually
            //return {...state, title: action.payload}
        },

        setAuthorFilter: (state, action) => {
            state.author = action.payload;
        },

        resetFilters: (state) => {
            //state.title = '';
            return initialState;
        }
    }
});

//const setTitileFilter = filterSlice.actions.setTitileFilter;

export const { setTitileFilter, resetFilters, setAuthorFilter } = filterSlice.actions;

export const selectTitileFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;