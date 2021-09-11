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
        <tr >
            <th>{props.id}</th>
            <th>{props.firstName}</th>
            <th>{props.lastName}</th>
            <th>{props.email}</th>
            <th>{props.phone}</th>
            <th>{props.state}</th>
            <br/>
        </tr>
    )
}