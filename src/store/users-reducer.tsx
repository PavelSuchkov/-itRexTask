import {ThunkAction} from "redux-thunk";
import {RootStateType} from "./store";
import {Dispatch} from "redux";
import {getUsers} from "../api/api";

export type UserType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    address: {
        state: string
        streetAddress: string
        city: string
        zip: string
        description: string
    }
}
const initialState = {
    users: [{
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: {
            state: '',
            streetAddress: '',
            city: '',
            zip: '',
            description: '',
        }
    }]
}
// const initialState = [] as Array<UserType>

export type InitialStateType = typeof initialState;


export const usersReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {

        case "SET_USERS":
            debugger
            return {...state, users: action.users}


        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setUsers>;

export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ActionsType>

export const setUsers = (users: any) => {
    return {
        type: "SET_USERS",
        users
    } as const
}


export const requestUsers = () => {
    return async (dispatch: Dispatch) => {
        const users = await getUsers();
        dispatch(setUsers(users))
    }
}
