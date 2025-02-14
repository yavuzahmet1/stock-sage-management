import React from 'react'
import { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'
import { useDispatch } from 'react-redux'

const Firms = () => {
    const { getFirms } = useStockCall()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFirms)
    }, [])

    return (
        <div>Firms</div>
    )
}

export default Firms