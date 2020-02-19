import Axios from "axios"

export const setCategory = (data)=>{
    return{type:'SET_CATEGORY',payload:data}
}
export const deleteCategory = (data)=>{
    return{type:'DELETE_CATEGORY',payload:data}
}
export const postCategory = (data)=>{
    return{type:'POST_CATEGORY',payload:data}
}


export const startGetCategory = (dispatch)=>{
    return (dispatch)=>{
            Axios.get('http://localhost:3050/user/category',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(res=>{
            const category = res.data
            dispatch(setCategory(category))
        })
        .catch(err=>alert(err))
    }
}
export const startPostCategory = (formdata)=>{
    return (dispatch)=>{
            Axios.post('http://localhost:3050/user/category',formdata,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(res=>{
            const category = res.data
            dispatch(postCategory(category))
        })
        .catch(err=>alert(err))
    }
}

export const startRemoveCategory=(id)=>{
    return (dispatch)=>{
        Axios.delete(`http://localhost:3050/user/category/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(res=>{
            const category = res.data
            dispatch(deleteCategory(category))
        })
        .catch(err=>alert(err))
    }
}