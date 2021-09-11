import {UserType} from "../store/users-reducer";

type TableItemPropsType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    state: string
    isSelected?: boolean
    onClick: ( ) => void
}

export const TableItem = (props: TableItemPropsType) => {

    return (
        <tr style={{border: '1px black'}} onClick={props.onClick}>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.state}</td>
            <br/>
        </tr>
    )
}