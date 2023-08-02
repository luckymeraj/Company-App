import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";

const store=createStore(rootReducer,applyMiddleware(thunk));
const persistor=persistStore(store);
export {store,persistor}