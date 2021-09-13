import React, {ChangeEvent, useEffect, useState} from "react";
import {
    displayListCreated,
    listOfStatesCreated,
    requestUsers,
    sortByEmail,
    sortByEmailReverse,
    sortByID,
    sortByIDReverse,
    sortByLastName,
    sortByLastNameReverse,
    sortByName,
    sortByNameReverse,
    sortByPhone,
    sortByPhoneReverse,
    sortBySearchString,
    sortByState,
    sortByStateReverse,
    sortByStateWithSelect,
    UserType
} from "../store/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {TableItem} from "./TableItem";
import {TableHeader} from "./TableHeader";
import {SelectedUser} from "./SelectedUser";
import styles from '../App.module.css'
import {Paginator} from "./Paginator/Paginator";
// import {v1} from "uuid"


export const Table = () => {

    const usersData = useSelector<RootStateType, Array<UserType>>(state => state.users.users);
    const searchResult = useSelector<RootStateType, Array<UserType>>(state => state.users.searchResult);
    const statesList = useSelector<RootStateType, Array<string>>(state => state.users.listOfStates);
    const displayList = useSelector<RootStateType, Array<UserType>>(state => state.users.displayList);
    const dispatch = useDispatch();

    const [isSearchWorks, setIsSearchWorks] = useState(false);
    const [users, setUsers] = useState<Array<UserType>>([]);
    const [selectedUser, setSelectedUser] = useState<UserType | null>(null);


    useEffect(() => {
        dispatch(requestUsers());
    }, [])


    useEffect(() => {
        setUsers(usersData);
        dispatch(displayListCreated());
        dispatch(listOfStatesCreated());
    }, [usersData])

    useEffect(() => {
        if(isSearchWorks) {
            setUsers(searchResult)
        } else {
            setUsers(usersData)
        }
    }, [searchResult, isSearchWorks])


    const clickHandler = (id: number) => {
        let foundedUser = users.find(u => u.id === id);
        if (foundedUser) {
            setSelectedUser(foundedUser);
        }
    }

    const [sortedId, setSortedId] = useState(false);
    const idSort = () => {
        if (sortedId) {
            dispatch(sortByIDReverse());
            setSortedId(false);
        } else {
            dispatch(sortByID());
            setSortedId(true);
        }
    }

    const [sortedName, setSortedName] = useState(false);
    const nameSort = () => {
        if (sortedName) {
            dispatch(sortByNameReverse());
            setSortedName(false);
        } else {
            dispatch(sortByName());
            setSortedName(true);
        }
    }
    const [sortedLastName, setSortedLastName] = useState(false);
    const lastNameSort = () => {
        if (sortedLastName) {
            dispatch(sortByLastNameReverse());
            setSortedLastName(false)
        } else {
            dispatch(sortByLastName());
            setSortedLastName(true)
        }

    }
    const [sortedEmail, setSortedEmail] = useState(false);
    const emailSort = () => {
        if (sortedEmail) {
            dispatch(sortByEmailReverse());
            setSortedEmail(false)
        } else {
            dispatch(sortByEmail());
            setSortedEmail(true)
        }
    }

    const [sortedPhone, setSortedPhone] = useState(false);
    const phoneSort = () => {
        if (sortedPhone) {
            dispatch(sortByPhoneReverse());
            setSortedPhone(false);
        } else {
            dispatch(sortByPhone());
            setSortedPhone(true);
        }
    }
    const [sortedState, setSortedState] = useState(false);
    const stateSort = () => {
        if (sortedState) {
            dispatch(sortByStateReverse());
            setSortedState(false);
        } else {
            dispatch(sortByState());
            setSortedState(true)
        }
    }

    const [searchString, setSearchString] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.currentTarget.value)
    }
    const searchButtonClick = () => {
        if (searchString === '') {
            dispatch(requestUsers())
        } else {
            dispatch(sortBySearchString(searchString))
            setIsSearchWorks(true)
        }
    }

    const resetSearchButtonClick = () => {
        setIsSearchWorks(false);
        setSearchString('')
    }


    const onSelectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {

        dispatch(sortByStateWithSelect(e.currentTarget.value));
        setSelectedUser(null);
    }
    const onPageChanged = (pageNumber: number) => {
        console.log('123')
    }
    return <table className={styles.table}>
        <div>
            <button onClick={idSort}>sort by ID</button>
            <button onClick={nameSort}>sort by Name</button>
            <button onClick={lastNameSort}>sort by LasName</button>
            <button onClick={emailSort}>sort by Email</button>
            <button onClick={phoneSort}>sort by Phone</button>
            <button onClick={stateSort}>sort by State</button>
        </div>

        <div>
            <input type="text" placeholder={'Search by name'} value={searchString}
                   onChange={(e) => onChangeHandler(e)}/>
            <button onClick={searchButtonClick}>Search</button>
            <button onClick={resetSearchButtonClick}>Reset Search</button>

            <select name="states" onChange={(e) =>
            {onSelectChangeHandler(e)}} >
                <option value={'select the state'} >select the state</option>
                {statesList.map(s => {
                    return <option id={s} value={s}>{s}</option>
                })}
            </select>
        </div>

        <TableHeader id={'ID'}
                     firstName={'First Name'}
                     lastName={'Last Name'}
                     email={'Email'}
                     phone={'Phone'}
                     state={'State'}/>
        {
            users.map((item, index) => {
                return <TableItem key={index}
                                  email={item.email}
                                  id={item.id}
                                  state={item.adress.state}
                                  firstName={item.firstName}
                                  lastName={item.lastName}
                                  phone={item.phone}
                                  onClick={() => clickHandler(item.id)}
                />
            })}
        <Paginator totalItemsCount={32} pageSize={20} currentPage={1} onPageChanged={onPageChanged}/>
        {!!selectedUser && <SelectedUser firstName={selectedUser.firstName}
                                         lastName={selectedUser.lastName}
                                         adress={selectedUser.adress}/>}

    </table>
}