import { Button, Container, Typography } from '@mui/material';
import useStockCall from '../hook/useStockCall'
import { useEffect, useState } from 'react';
import PurchasesTable from '../components/Table/PurchasesTable';
import { useSelector } from 'react-redux';

const Purchases = () => {
    const { getPurchases } = useStockCall();
    const { loading, error } = useSelector((state) => state.stock);

    const [selectedData, setSelectedData] = useState({
        brandId: "",
        firmId: "",
        productId: "",
        quantity: "",
        price: "",
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        getPurchases()
    }, [])

    return (
        <div>
            <Container>
                <Typography fontFamily="Apple Color Emoji" textAlign="center" variant='h4' >PURCHASES</Typography>

                <Button
                    variant="contained"
                    onClick={handleOpen} sx={{ marginBottom: "1rem" }}
                >
                    Add Purchases
                </Button>
                <PurchasesTable open={open} setSelectedData={setSelectedData} />
            </Container>
        </div>
    )
}

export default Purchases