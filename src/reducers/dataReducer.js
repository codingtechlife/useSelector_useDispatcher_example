
function reducer(state = {}, action) {
    switch (action.type) {
        case "GET_DATA":
            return "Hello!";
        default:
            return "Default";
    }
}

export default reducer;