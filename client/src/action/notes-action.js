import axios from 'axios'

export const setNotes = (notes)=>{
    return{type:'SET_NOTES',payload:notes}
}
export const postNotes = (notes)=>{
    return {type:'POST_NOTES',payload:notes}
}
export const editNotes = (notes)=>{
    return {type:'EDIT_NOTES',payload:notes}
}
export const deleteNotes = (notes)=>{
    return {type:'DELETE_NOTES',payload:notes}
}

export const startGetNotes = (dispatch)=>{
    return(dispatch)=>{
        axios.get('http://localhost:3050/user/notes',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
        }})
            .then(res=>{
                const notes = res.data
                dispatch(setNotes(notes))
            })
            .catch(err=>alert(err))
    }
}
export const startPostNotes = (formdata)=>{
    console.log(formdata)
    return(dispatch)=>{
        axios.post('http://localhost:3050/user/notes',formdata,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
        }})
            .then(res=>{
                const notes = res.data
                dispatch(postNotes(notes))
            })
            .catch(err=>alert(err))
    }
}

export const startDeleteNotes = (id)=>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3050/user/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then(res=>{
                const notes = res.data
                dispatch(deleteNotes(notes))
            })
            .catch(err=>alert(err))
    }
}
export const startEditNotes = (id,formdata)=>{
    return(dispatch)=>{
        axios.put(`http://localhost:3050/user/notes/${id}`,formdata,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then(res=>{
                const notes = res.data
                dispatch(editNotes(notes))
            })
            .catch(err=>alert(err))
    }
}