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

export default function PurchasesModal({ open, handleClose, selectedData }) {
    const { categories, brands, product } = useSelector(state => state.stock);
    const { addStockData } = useStockCall();

    const [info, setInfo] = useState({
        categoryId: selectedData?.categoryId || "",
        brandId: selectedData?.brandId || "",
        name: selectedData?.name || "",
    });

    useEffect(() => {
        setInfo({
            categoryId: selectedData?.categoryId || "",
            brandId: selectedData?.brandId || "",
            name: selectedData?.name || "",
        });
    }, [selectedData]);

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value || "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addStockData("Purchases", info);
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
                        Add Product
                    </Typography>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            name="categoryId"
                            value={info.categoryId || ""}
                            onChange={handleChange}
                            label="Category"
                        >
                            {categories?.map(category => (
                                <MenuItem key={category._id} value={category._id}>{category.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
                    <TextField
                        color="warning"
                        name="name"
                        label="Product Name"
                        variant="standard"
                        value={info.name || ""}
                        type="text"
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        sx={{ borderRadius: "2rem" }}
                        color="success"
                        variant="contained"
                    >
                        Add Product
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}