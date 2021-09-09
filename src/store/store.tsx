import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./users-reducer";
import thunkMiddleware from "redux-thunk"


const reducers = combineReducers({
    users: usersReducer
});

export type RootStateType = ReturnType<typeof reducers>;

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store