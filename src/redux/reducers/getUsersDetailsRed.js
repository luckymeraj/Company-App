const initialState={singlePost:{}}
export const getUsersDetailsRed=(state=initialState.singlePost,action)=>{
    switch (action.type) {
        case 'SET_SINGLE_POST':
            
            return action.payload;
    
        default:
            return state
    }
}