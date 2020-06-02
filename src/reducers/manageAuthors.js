const manageAuthors = (state = [], action) => {
    let idx;

    switch(action.type) {
        case "ADD_AUTHOR":
            return [...state, action.author];

        case "REMOVE_AUTHOR":
            idx = state.findIndex(author => author.id === action.id);
            return [...state.slice(0, idx), ...state.slice(idx + 1)];

        case "ADD_BOOK":
            const booksByAuthor = state.filter(author => author.authorName === action.book.authorName);
            if (booksByAuthor.length > 0) {
                return [...state]
            } else { return [...state, { authorName: action.book.authorName }] }

        default:
            return state;
    }
}

export default manageAuthors;