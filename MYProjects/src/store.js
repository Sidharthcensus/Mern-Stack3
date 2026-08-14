import { configureStore } from "@reduxjs/toolkit";
import { VoteReducer } from "./Votes/VoteReducer";

const store=configureStore({
    reducer:{
        vote:VoteReducer
    }
})

export default store