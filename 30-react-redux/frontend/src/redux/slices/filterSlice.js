import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setTitileFilter: (state, action) => {
            return { ...state, title: action.payload };
        }
    }
});

//const setTitileFilter = filterSlice.actions.setTitileFilter;

export const { setTitileFilter } = filterSlice.actions;

export const selectTitileFilter = (state) => state.filter.title;

export default filterSlice.reducer;