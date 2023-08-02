const initialState={allPost:{}}
export const getUsersDetailsAllRed=(state=initialState.allPost,action)=>{
    switch (action.type) {
        case 'SET_All_POST':
            console.log('acn',[action.payload])
            return {allPost:action.payload};
    
        default:
            return state
    }
}