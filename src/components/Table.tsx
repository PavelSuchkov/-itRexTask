import {useEffect, useState} from "react";
import {requestUsers, UserType} from "../store/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {TableItem} from "./TableItem";
import {TableHeader} from "./TableHeader";
import {SelectedUser} from "./SelectedUser";


export const Table = () => {

    const usersData = useSelector<RootStateType, Array<UserType>>(state => state.users.users);
    const dispatch = useDispatch();

    console.log(usersData)
    // if (usersData !== [] || undefined || null) {
    //     const newUsers =  usersData.users.map((u: UserType) => u)
    //     console.log(newUsers)
    // }

    // console.log('usersData is: ' + usersData)
    const [users, setUsers] = useState<Array<UserType>>([]);
    const [selectedUser, setSelectedUser] = useState<UserType | null>(null);


    useEffect(() => {
        dispatch(requestUsers())
    }, [])

    useEffect(() => {
        setUsers(usersData);
    }, [usersData])

    console.log(users)


    const clickHandler = (id: number) => {
        debugger
        let foundedUser = users.find(u => u.id === id);
        if (foundedUser) {
            setSelectedUser(foundedUser)
        }
    }
    return <table>

        <TableHeader id={'ID'}
                     firstName={'First Name'}
                     lastName={'Last Name'}
                     email={'Email'}
                     phone={'Phone'}
                     state={'State'}/>
        {
            users.map((item) => {
                return <TableItem key={item.id}
                                  email={item.email}
                                  id={item.id}
                                  state={item.adress.state}
                                  firstName={item.firstName}
                                  lastName={item.lastName}
                                  phone={item.phone}
                                  onClick={() => clickHandler(item.id)}
                />
            })}
        {!!selectedUser && <SelectedUser firstName={selectedUser.firstName}
                                         lastName={selectedUser.lastName}
                                         adress={selectedUser.adress}/>}

    </table>
}