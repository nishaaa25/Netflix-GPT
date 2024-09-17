import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice(
    {
        name:"slice",
        initialState:{
            isGptSearchActive: false,
            moviesName : null,
            moviesResults: null
        },
        reducers:{
            addIsGptSearchActive:(state)=>{
                state.isGptSearchActive = !state.isGptSearchActive;
            },
            addGptMovies: (state, action)=>{
                const {moviesName, moviesResults} = action.payload;
                state.moviesName = moviesName;
                state.moviesResults = moviesResults;
            }
        }
    }
)
    
export const {addIsGptSearchActive, addGptMovies} = GptSearchSlice.actions;
export default GptSearchSlice.reducer;


