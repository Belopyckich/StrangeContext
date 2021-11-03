import { postReducer } from "./postReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
    posts: postReducer
})

export const store = createStore(rootReducer);