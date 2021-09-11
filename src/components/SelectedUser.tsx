
type SelectedUserPropsType = {
    firstName: string
    lastName: string
    adress: {
        description: string
        city: string
        state: string
        zip: string
        streetAddress: string
    }
}
export const SelectedUser = (props: SelectedUserPropsType) => {
    return <div>
        <div>Profile Info:</div>
        <div>Selected profile: {props.firstName + ' ' + props.lastName}</div>
        <div>Description: {props.adress.description}</div>
        <div>Address: {props.adress.streetAddress}</div>
        <div>City: {props.adress.city}</div>
        <div>State: {props.adress.state}</div>
        <div>Index: {props.adress.zip}</div>
    </div>
}