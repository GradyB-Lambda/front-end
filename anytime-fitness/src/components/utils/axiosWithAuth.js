import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://anywherefitness1120.herokuapp.com',
        headers: {
            authorization: token
        }
    })
}




