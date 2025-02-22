import { useDispatch } from 'react-redux'
import { fetchStart, fetchFail, firmSuccess, stockSuccess } from "../features/stockSlice"
import useAxios from './useAxios'
import { useSelector } from 'react-redux';
import { getProCatBrandSuccess } from "../features/stockSlice";


const useStockCall = () => {
    const dispatch = useDispatch();
    const { axiosWithToken } = useAxios()
    // const { token } = useSelector(state => state.auth)

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
            dispatch(stockSuccess({ data, url }))

        } catch (error) {
            dispatch(fetchFail())
        }
    }

    const deleteStockData = async (url, id) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.delete(`${url}/${id}`)
            getStockData(url)

        } catch (error) {
            dispatch(fetchFail())
        }
    }

    const addStockData = async (url, info) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.post(url, info)
            getStockData(url)
        } catch (error) {
            dispatch(fetchFail())
        }

    }
    const updateStockData = async (url, info) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken.put(`${url}/${info._id}`, info)
            getStockData(url)
        } catch (error) {
            dispatch(fetchFail())
        }

    }

    const getProducts = async () => {
        dispatch(fetchStart());
        try {
            const [products, categories, brands] = await Promise.all([
                axiosWithToken("products"),
                axiosWithToken("categories"),
                axiosWithToken("brands"),
            ]);
            dispatch(getProCatBrandSuccess([products?.data?.data, categories?.data.data, brands?.data?.data]));
        } catch (error) {
            dispatch(fetchFail());
        }
    };

    return { getStockData, deleteStockData, addStockData, updateStockData, getProducts }
}

export default useStockCall