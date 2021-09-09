import {useEffect, useState} from "react";
import {requestUsers, UserType} from "../store/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {TableItem} from "./TableItem";


export const Table = () => {

    const usersData = useSelector<RootStateType, Array<UserType>>(state => state.users.users);
    const dispatch = useDispatch();

    console.log(usersData)
    // if (usersData !== [] || undefined || null) {
    //     const newUsers =  usersData.users.map((u: UserType) => u)
    //     console.log(newUsers)
    // }

    console.log('usersData is: ' + usersData)
    const [users, setUsers] = useState<Array<UserType>>([])

    useEffect(() => {
        dispatch(requestUsers())
    }, [])

    useEffect(() => {
        debugger
        setUsers(usersData);
    }, [usersData])

    console.log(users)


    return <table>
        <tr>
            <td><b>id</b></td>
            <br/>
            <td><b>First name</b></td>
            <td><b>Last name</b></td>
            <td><b>Email</b></td>
            <td><b>Phone</b></td>
            <td><b>State</b></td>
        </tr>
        {
            users.map((item) => {
                return <TableItem key={item.id}
                                  email={item.email}
                                  id={item.id}
                                  state={item.address.state}
                                  firstName={item.firstName}
                                  lastName={item.lastName}
                                  phone={item.phone}
                />
            })}


    </table>
}