import { Button, Container, Typography } from '@mui/material';
import React from 'react'
import ProductsTable from '../components/Table/ProductsTable';

const Products = () => {
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