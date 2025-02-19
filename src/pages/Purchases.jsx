import { Button, Container, Typography } from '@mui/material';
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react';
import PurchasesTable from '../components/Table/PurchasesTable';

const Purchases = () => {
    const { getStockData } = useStockCall()

    useEffect(() => {
        console.log("products")
        getStockData("products")
        console.log("brands")
        getStockData("brands")
        console.log("categories")
        getStockData("categories")
        console.log("Purchases")
        getStockData("purchases");
    })

    return (
        <div>
            <Container>
                <Typography fontFamily="Apple Color Emoji" textAlign="center" variant='h4' >PURCHASES</Typography>

                <Button
                    variant="contained"
                >
                    Add Purchases
                </Button>
                <PurchasesTable />
            </Container>
        </div>
    )
}

export default Purchases