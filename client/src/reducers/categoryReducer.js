const categoryReducer = (state=[],action)=>{
    switch(action.type){
        case('SET_CATEGORY'):{
            return [...action.payload]
        }
        case('DELETE_CATEGORY'):{
            const filtered = state.filter(ele=>ele.id!==action.payload._id)
            return [...filtered]
        }
        case('POST_CATEGORY'):{
            return [action.payload,...state]
        }
        default:{
            return [...state]
        }
    }
}

module.exports = categoryReducer