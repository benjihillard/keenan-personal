export const initialState = {
    data: [],
    page: "loading",
    content: {title: "blah"},
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){

        case "SET_DATA":
            return {
              ...state,
              data: action.data,
            };
        case "SET_PAGE":
            return {
              ...state,
              page: action.page,
            };
        case "SET_CONTENT":
            return {
              ...state,
              content: action.content,
            };
        
        default:
            return state;
    }
}

export default reducer;