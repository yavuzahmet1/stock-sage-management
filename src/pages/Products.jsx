import { Button, Container, Typography } from '@mui/material';
import ProductsTable from '../components/Table/ProductsTable';
import useStockCall from '../hook/useStockCall'
import { useEffect } from 'react';

const Products = () => {
    const { getStockData } = useStockCall()

    useEffect(() => {
        getStockData("products")
        getStockData("brands")
        getStockData("categories")
    })
    return (
        <div>
            <Container>
                <Typography fontFamily="Apple Color Emoji" textAlign="center" variant='h4' >PRODUCTS</Typography>


                <Button
                    variant="contained"
                >
                    Add Product
                </Button>
                <ProductsTable />
            </Container>
        </div>
    )
}

export default Products