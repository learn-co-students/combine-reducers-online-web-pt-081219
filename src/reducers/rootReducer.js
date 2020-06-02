import { combineReducers } from 'redux';
import manageBooks from './manageBooks';
import manageAuthors from './manageAuthors';

export default combineReducers({
    authors: manageAuthors,
    books: manageBooks
});