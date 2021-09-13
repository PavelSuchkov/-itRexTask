
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
    return <div style={{textAlign: 'center'}}>
        <div>Profile Info:</div>
        <div>Selected profile: <b>{props.firstName + ' ' + props.lastName}</b></div>
        <div>Description: <b>{props.adress.description}</b></div>
        <div>Address: <b>{props.adress.streetAddress}</b></div>
        <div>City: <b>{props.adress.city}</b></div>
        <div>State: <b>{props.adress.state}</b></div>
        <div>Index: <b>{props.adress.zip}</b></div>
    </div>
}