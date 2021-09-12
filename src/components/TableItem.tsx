import {UserType} from "../store/users-reducer";
import React from "react";
import styles from '../App.module.css'

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

export const TableItem = React.memo((props: TableItemPropsType) => {

    return (
        <tr className={styles.tr} onClick={props.onClick}>
            <td className={styles.td}>{props.id}</td>
            <td className={styles.td}>{props.firstName}</td>
            <td className={styles.td}>{props.lastName}</td>
            <td className={styles.td}>{props.email}</td>
            <td className={styles.td}>{props.phone}</td>
            <td className={styles.td}>{props.state}</td>
            <br/>
        </tr>
    )
})