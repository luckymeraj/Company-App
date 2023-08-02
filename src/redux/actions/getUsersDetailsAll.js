import axios from "axios";

export const getUsersDetailsAll=()=> async (dispatch)=>{
    try {
        const response=await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        console.log('res2',response)
        dispatch({type:'SET_All_POST',payload:response.data})
    } catch (error) {
        console.log('error in all posts',error)
    }
}