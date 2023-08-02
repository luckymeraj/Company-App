import { combineReducers } from "redux"
import persistReducer from "redux-persist/es/persistReducer"
import { getUsersDetailsRed } from "./getUsersDetailsRed"
import localStorage from "redux-persist/es/storage"
import { getUsersDetailsAllRed } from "./getUsersDetailsAllRed"

const persistConfig={
    key:'root',
    storage:localStorage
}
export const rootReducer=combineReducers({
    singlePost:persistReducer(persistConfig,getUsersDetailsRed),
    allPost:persistReducer(persistConfig,getUsersDetailsAllRed),
})