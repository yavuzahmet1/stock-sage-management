import { useDispatch } from 'react-redux'
import { fetchStart, fetchFail, firmSuccess, stockSuccess } from "../features/stockSlice"
import useAxios from './useAxios'
import { useSelector } from 'react-redux';


const useStockCall = () => {
    const dispatch = useDispatch();
    const { axiosWithToken } = useAxios()
    const { token } = useSelector(state => state.auth)

    // const getFirms = async () => {
    //     dispatch(fetchStart())
    //     try {
    //         const { data } = await axiosWithToken.get("firms")
    //         dispatch(firmSuccess(data))

    //     } catch (error) {
    //         dispatch(fetchFail())
    //     }
    // }

    const getStockData = async (url) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get(`${url}`)
            console.log("getStockData : ", data)
            dispatch(stockSuccess({ data, url }))

        } catch (error) {
            dispatch(fetchFail())
        }
    }

    const deleteStockData = async (url, id) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.get(`${url}/${id}`)

            console.log("delete: ", data)
            getStockData(url)

        } catch (error) {
            dispatch(fetchFail())
        }
    }

    return { getStockData, deleteStockData }
}

export default useStockCall