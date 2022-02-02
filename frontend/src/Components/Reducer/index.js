// Store File
import { createStore, combineReducers } from "redux";

// import reducers
// import {articlesReducer} from "./article/index";
import {loginReducer} from "./Login/index";
// import {CommentReducer} from "./comment/index";
// const reducers = combineReducers({ loginReducer, articlesReducer,CommentReducer });

const reducers = combineReducers({loginReducer});
const store = createStore(reducers);

export default store;