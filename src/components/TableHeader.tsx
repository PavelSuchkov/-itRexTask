import {UserType} from "../store/users-reducer";

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
            <th className="btn" >{props.id}</th>
            <th className="btn">{props.firstName}</th>
            <th className="btn">{props.lastName}</th>
            <th className="btn">{props.email}</th>
            <th className="btn">{props.phone}</th>
            <th className="btn">{props.state}</th>
            <br/>
        </tr>
    )
}