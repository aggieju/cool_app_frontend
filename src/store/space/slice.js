/*## Feature 1 - Homepage

1. Write an endpoint that responds with a list of spaces
2. Create a component for the Spaces
3. Write thunk to fetch data and test it (import and dispatch in the component)
4. If thunk is working, dispatch an action to update the reducer
5. Write a selector and use it to display the data on the screen*/



import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    spaces: [],
    spaceDetails: {}
};

export const spaceSlice = createSlice({
    name: "space",
    initialState,
    reducers: {
        postSpace: (state, action) => {

            //3. Write a case in the slice/reducer to update the store
            console.log("action", action);
            // 4. Test: check the Redux store
            state.spaces = action.payload;
            state.spaceDetails = action.payload;

        },

    },
});

export const { postSpace } = spaceSlice.actions;

export default spaceSlice.reducer;