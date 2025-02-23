import { useStepperContext } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react'

const Sales = () => {
    const { getSales } = useStockCall()
    const { sales } = useSelector(state => state.stock)
    console.log("sales page : ", sales)

    useEffect(() => {
        getSales()
    }, [])



    return (
        <div>Sales</div>
    )
}

export default Sales