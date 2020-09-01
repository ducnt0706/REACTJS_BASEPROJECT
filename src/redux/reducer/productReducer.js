const { ADD_PRODUCT } = require("../actionTypes");

let initState=[];
const productReducer=(state=initState,action)=>{
    switch (action.type) {
        case ADD_PRODUCT:
            return [...initState,action.payload];
        default:
            return state;
    }
}

export default productReducer;