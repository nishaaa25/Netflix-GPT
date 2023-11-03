import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gptSearchReducer from "./searchSlice";
import configReducer from "./configSlice";

const appStore = configureStore(
    {
        reducer:{
            user: userReducer,
            movies : movieReducer,
            gptSearch : gptSearchReducer,
            config: configReducer
        },
    }
);
export default appStore;