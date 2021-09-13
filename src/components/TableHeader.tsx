import {UserType} from "../store/users-reducer";
import './TableHeader.css';


type TableItemPropsType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    state: string

}

export const TableHeader = (props: TableItemPropsType) => {

    return (
        <tr>
            <th><button className="btn">{props.id}</button></th>
            <th><button className="btn">{props.firstName}</button></th>
            <th><button className="btn">{props.lastName}</button></th>
            <th><button className="btn">{props.email}</button></th>
            <th><button className="btn">{props.phone}</button></th>
            <th><button className="btn">{props.state}</button></th>
            <br/>
        </tr>
    )
}