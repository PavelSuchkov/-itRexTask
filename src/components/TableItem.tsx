import {UserType} from "../store/users-reducer";

type TableItemPropsType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    state: string
}

export const TableItem = (props: TableItemPropsType) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.state}</td>
        </tr>
    )
}