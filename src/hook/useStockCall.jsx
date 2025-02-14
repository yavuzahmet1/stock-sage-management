import { useDispatch } from 'react-redux'
import { fetchStart, fetchFail, firmSuccess } from "../features/stockSlice"
import useAxios from './useAxios'
import { useSelector } from 'react-redux';


const useStockCall = () => {
    const dispatch = useDispatch();
    const { axiosWithToken } = useAxios()
    const { token } = useSelector(state => state.auth)

    const getFirms = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get(firms)
            console.log(data)
            dispatch(firmSuccess(data))

        } catch (error) {
            dispatch(fetchFail())
        }
    }

    return { getFirms }
}

export default useStockCall