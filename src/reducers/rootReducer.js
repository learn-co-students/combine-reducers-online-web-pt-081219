import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import authorsReducer from "./authorsReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    authors: authorsReducer
})

export default rootReducer