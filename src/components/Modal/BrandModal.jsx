import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';
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

export default function BrandModal({ open, handleClose }) {
    const { addStockData } = useStockCall()
    const [info, setInfo] = useState({
        name: "",
        image: ""
    })
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form gönderildi:", info);
        addStockData("brands", info)
        handleClose()
    }

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
                        Add To Firm
                    </Typography>
                    <TextField
                        color="primary"
                        label="Name"
                        variant="standard"
                        name="name"
                        value={info.name}
                        onChange={handleChange}
                    />
                    <TextField
                        color="primary"
                        label="Image"
                        variant="standard"
                        name="image"
                        value={info.image}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        sx={{ borderRadius: "2rem" }}
                        color="success"
                        variant="contained"
                    >
                        Add
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
