import axios from "axios";
import {UserType} from "../store/users-reducer";


export const getUsers = () =>  {
        return axios.get<Array<UserType>>(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32`)
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
    }
