import {UserType} from "../store/users-reducer";

type TableItemPropsType = {
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

export const TableItem = (props: TableItemPropsType) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.address.state}</td>
        </tr>
    )
}