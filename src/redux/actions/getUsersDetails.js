import axios from "axios"

export const getUsersDetails=(postId)=> async (dispatch)=>{
    try {
        const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        console.log('res1',response)
        dispatch({type:'SET_SINGLE_POST',payload:response.data})
    } catch (error) {
        console.log('error in single posts',error)
    }
}

