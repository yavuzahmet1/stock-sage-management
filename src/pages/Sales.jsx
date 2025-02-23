
import React from 'react'
import { useSelector } from 'react-redux'
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react'
import SalesTable from '../components/Table/SalesTable'
import { useState } from 'react'
import SalesModal from '../components/Modal/SalesModal'
import { Button, Container, Typography } from '@mui/material'

const Sales = () => {
    const { getSales } = useStockCall()
    const { sales } = useSelector(state => state.stock)
    console.log("sales page : ", sales)

    const [selectedData, setSelectedData] = useState({
        brandId: "",
        productId: "",
        quantity: "",
        price: "",
    })

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        getSales()
    }, [])



    return (
        <div>
            <Container>
                <Typography fontFamily="Apple Color Emoji" textAlign="center" variant='h4' >SALES</Typography>

                <Button
                    variant="contained"
                    onClick={handleOpen} sx={{ marginBottom: "1rem" }}
                >
                    Add New Sale
                </Button>
                <SalesTable handleOpen={handleOpen} setSelectedData={setSelectedData} open={open} handleClose={handleClose} />
                {open && (
                    <SalesModal
                        open={open}
                        handleClose={handleClose}
                        selectedData={selectedData}
                    />)}
            </Container>

        </div>
    )
}

export default Sales