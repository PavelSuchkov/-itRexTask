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
    adress: {
        state: string
        streetAddress: string
        city: string
        zip: string
        description: string
    }
};


const initialState = {
    users: [{
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        adress: {
            state: '',
            streetAddress: '',
            city: '',
            zip: '',
            description: '',
        }
    }],
    queryString: '',
    searchResult : [] as Array<UserType>
    // selectedUser: {
    //     id: '',
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     adress: {
    //         state: '',
    //         streetAddress: '',
    //         city: '',
    //         zip: '',
    //         description: '',
    //     }
    // }
}
// const initialState = [] as Array<UserType>

export type InitialStateType = typeof initialState;


export const usersReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {

        case "SET_USERS":
            return {...state, users: action.users}

        case "SORT_BY_ID":
            return {...state, users: [...state.users.sort((a, b) => (a.id - b.id))]}
        case "SORT_BY_ID_REVERSE":
            return {...state, users: [...state.users.sort((a, b) => (a.id - b.id))].reverse()}

        case "SORT_BY_NAME":
            return {...state, users: [...state.users.sort((a, b) => (a.firstName.localeCompare(b.firstName)))]}
        case "SORT_BY_NAME_REVERSE":
            return {...state, users: [...state.users.sort((a, b) => (a.firstName.localeCompare(b.firstName)))].reverse()}

        case "SORT_BY_LASTNAME":
            return {...state, users: [...state.users.sort((a, b) => (a.lastName.localeCompare(b.lastName)))]}
        case "SORT_BY_LASTNAME_REVERSE":
            return {...state, users: [...state.users.sort((a, b) => (a.lastName.localeCompare(b.lastName)))].reverse()}

        case "SORT_BY_EMAIL":
            return {...state, users: [...state.users.sort((a, b) => (a.email.localeCompare(b.email)))]}
        case "SORT_BY_EMAIL_REVERSE":
            return {...state, users: [...state.users.sort((a, b) => (a.email.localeCompare(b.email)))].reverse()}

        case "SORT_BY_PHONE":
            return {...state, users: [...state.users.sort((a, b) => (a.phone.localeCompare(b.phone)))]}
        case "SORT_BY_PHONE_REVERSE":
            return {...state, users: [...state.users.sort((a, b) => (a.phone.localeCompare(b.phone)))].reverse()}

        case "SORT_BY_STATE":
            return {...state, users: [...state.users.sort((a, b) => (a.adress.state.localeCompare(b.adress.state)))]}
        case "SORT_BY_STATE_REVERSE":
            return {...state, users: [...state.users.sort((a, b) => (a.adress.state.localeCompare(b.adress.state)))].reverse()}

        case "SORT_BY_SEARCH_STRING":
            debugger
            if(action.searchString !== '') {
                return {...state, searchResult: [...state.users.filter((u) => u.firstName.toLowerCase().indexOf(action.searchString) !== -1)]}
            } else return {...state}

        // case "RESET_SEARCH":
        //     return {...state, users: [...state.users.sort((a, b) => (a.adress.state.localeCompare(b.adress.state)))].reverse()}

        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setUsersAC>
                  | ReturnType<typeof sortByID>
                  | ReturnType<typeof sortByName>
                  | ReturnType<typeof sortByLastName>
                  | ReturnType<typeof sortByEmail>
                  | ReturnType<typeof sortByPhone>
                  | ReturnType<typeof sortByState>
                  | ReturnType<typeof setUsersACReverse>
                  | ReturnType<typeof sortByEmailReverse>
                  | ReturnType<typeof sortByIDReverse>
                  | ReturnType<typeof sortByNameReverse>
                  | ReturnType<typeof sortByLastNameReverse>
                  | ReturnType<typeof sortByPhoneReverse>
                  | ReturnType<typeof sortByStateReverse>
                  | ReturnType<typeof sortBySearchString>
                  | ReturnType<typeof resetSearch>

export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ActionsType>

export const setUsersAC = (users: any) => {
    return {
        type: "SET_USERS",
        users
    } as const
}
export const setUsersACReverse = (users: any) => {
    return {
        type: "SET_USERS",
        users
    } as const
}
export const sortByID = () => {
    return {
        type: "SORT_BY_ID"
    } as const
}
export const sortByIDReverse = () => {
    return {
        type: "SORT_BY_ID_REVERSE"
    } as const
}
export const sortByName = () => {
    return {
        type: "SORT_BY_NAME"
    } as const
}
export const sortByNameReverse = () => {
    return {
        type: "SORT_BY_NAME_REVERSE"
    } as const
}
export const sortByLastName = () => {
    return {
        type: "SORT_BY_LASTNAME"
    } as const
}
export const sortByLastNameReverse = () => {
    return {
        type: "SORT_BY_LASTNAME_REVERSE"
    } as const
}
export const sortByEmail = () => {
    return {
        type: "SORT_BY_EMAIL"
    } as const
}
export const sortByEmailReverse = () => {
    return {
        type: "SORT_BY_EMAIL_REVERSE"
    } as const
}
export const sortByPhone = () => {
    return {
        type: "SORT_BY_PHONE"
    } as const
}
export const sortByPhoneReverse = () => {
    return {
        type: "SORT_BY_PHONE_REVERSE"
    } as const
}
export const sortByState = () => {
    return {
        type: "SORT_BY_STATE"
    } as const
}
export const sortByStateReverse = () => {
    return {
        type: "SORT_BY_STATE_REVERSE"
    } as const
}
export const sortBySearchString = (searchString: string) => {
    return {
        type: "SORT_BY_SEARCH_STRING",
        searchString
    } as const
}
export const resetSearch = () => {
    return {
        type: "RESET_SEARCH",
    } as const
}


//Thunks
export const requestUsers = () => {
    return async (dispatch: Dispatch) => {
        const users = await getUsers();
        dispatch(setUsersAC(users))
    }
}
