import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchStart, fetchFail, firmSuccess } from "../features/stockSlice"
import { useSelector } from 'react-redux'
// import { useState } from 'react'

const useStockCall = () => {
    const BASE_URL = import.meta.env.VITE_BASE_URL
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.auth)
    // const [firms, setFirms] = useState()
    // const { firms } = useSelector(state => state.stock)

    const getFirms = async () => {
        dispatch(fetchStart())
        try {
            const { data } = await axios.get(`${BASE_URL}firms`, {
                headers: {
                    Authorization: `Token ${token}`
                },


            })
            // console.log(data)
            dispatch(firmSuccess(data))
        } catch (error) {
            dispatch(fetchFail())
        }
    }

    return { getFirms }
}

export default useStockCall