import {UserType} from "../store/users-reducer";
import {inspect} from "util";
import styles from '../App.module.css'

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
            <th className={styles.btn} >{props.id}</th>
            <th className={styles.btn}>{props.firstName}</th>
            <th className={styles.btn}>{props.lastName}</th>
            <th className={styles.btn}>{props.email}</th>
            <th className={styles.btn}>{props.phone}</th>
            <th className={styles.btn}>{props.state}</th>
            <br/>
        </tr>
    )
}