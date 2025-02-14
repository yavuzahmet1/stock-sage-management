import axios from 'axios'
import { useSelector } from 'react-redux'

const useAxios = () => {

    const { token } = useSelector(state => state.auth)

    const axiosWithToken = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {
            Authorization: `Token ${token}`
        }
    })

    // const getFirms = async () => {
    //     dispatch(fetchStart())
    //     try {
    //         const { data } = await axios.get(`${BASE_URL}firms`, {
    //             headers: {
    //                 Authorization: `Token ${token}`
    //             },
    //         })
    //         // console.log(data)
    //         dispatch(firmSuccess(data))
    //     } catch (error) {
    //         dispatch(fetchFail())
    //     }
    // }

    return { axiosWithToken }
}

export default useAxios