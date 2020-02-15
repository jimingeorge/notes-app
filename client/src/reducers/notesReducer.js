

const notesReducer = (state=[],action)=>{
    switch(action.type){
        case('SET_NOTES'):{
            return [...action.payload]
        }
        case('POST_NOTES'):{
            return [{...action.payload},...state]
        }
        case('DELETE_NOTES'):{
            const filtered = state.filter(ele=>ele._id!==action.payload._id)
            return [...filtered]
        }
        case ('EDIT_NOTES'):{
            const res = state.find(ele=>ele._id==action.payload._id)
            state[state.indexOf(res)]=action.payload
            return [...state]
        }
        default:{
            return [...state]
        }
    }
}

export default notesReducer