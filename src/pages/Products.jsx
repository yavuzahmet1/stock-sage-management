import { Button, Container, Typography } from '@mui/material';
import ProductsTable from '../components/Table/ProductsTable';
import useStockCall from '../hook/useStockCall'
import { useEffect, useState } from 'react';
import ProductModal from '../components/Modal/ProductModal';

const Products = () => {
    const { getStockData } = useStockCall()

    const { selectedData, setSelectedData } = useState({
        category: "",
        brandId: "",
        name: ""
    })

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        getStockData("products")
        getStockData("brands")
        getStockData("categories")
    })


    return (
        <div>
            <Container>
                <Typography fontFamily="Apple Color Emoji" textAlign="center" variant='h4' >PRODUCTS</Typography>
                <ProductModal open={open} handleClose={handleClose} selectedData={selectedData} />

                <Button
                    variant="contained"
                    onClick={handleOpen}
                >
                    Add Product
                </Button>
                <ProductsTable />
            </Container>
        </div>
    )
}

export default Products