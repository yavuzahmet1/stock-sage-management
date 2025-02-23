import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, TextField } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStockCall from '../../hook/useStockCall';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    backgroundColor: "#34495E",
    color: "#FFFFFF",
    border: "none"
};

const SalesModal = ({ open, handleClose, selectedData }) => {
    const { products, brands } = useSelector(state => state.stock);
    const { addStockData, updateStockData } = useStockCall();

    const [info, setInfo] = useState(selectedData)

    useEffect(() => {
        setInfo({
            brandId: selectedData?.brandId || "",
            productId: selectedData?.productId || "",
            name: selectedData?.name || "",
            quantity: selectedData?.quantity || "",
            price: selectedData?.price || ""
        });
    }, [selectedData]);

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value || "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (info.firmId) {
            updateStockData("sales", info);
        } else {
            addStockData("sales", info);
        }
        handleClose();
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    component="form"
                    sx={{ ...style, borderRadius: 6 }}
                    onSubmit={handleSubmit}
                >
                    <Typography color="warning" variant="h5" textAlign="center">
                        Add New Sale
                    </Typography>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name="brandId"
                            value={info.brandId || ""}
                            onChange={handleChange}
                            label="Brand"
                        >
                            {brands?.map(brand => (
                                <MenuItem key={brand._id} value={brand._id}>{brand.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Product</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name="productId"
                            value={info.productId || ""}
                            onChange={handleChange}
                            label="Product"
                        >
                            {products?.map(product => (
                                <MenuItem key={product._id} value={product._id}>{product.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        color="warning"
                        name="quantity"
                        label="Quantity"
                        variant="standard"
                        value={info.quantity || ""}
                        type="number"
                        onChange={handleChange}
                    />
                    <TextField
                        color="warning"
                        name="price"
                        label="Price"
                        variant="standard"
                        value={info.price || ""}
                        type="number"
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        sx={{ borderRadius: "2rem" }}
                        color="success"
                        variant="contained"
                    >
                        Add Sale
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}

export default SalesModal