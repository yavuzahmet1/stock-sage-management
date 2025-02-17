import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';
import useStockCall from '../../hook/useStockCall';
import { useEffect } from 'react';

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

export default function FirmModal({ open, handleClose, selectedData, caption }) {
    const { addStockData, updateStockData } = useStockCall()
    const [info, setInfo] = useState({
        name: "",
        phone: "",
        address: "",
        image: "",
    })
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (info._id) {
            updateStockData("firms", info);
            console.log("Form güncellendi:", info);
        } else {
            addStockData("firms", info);
            console.log("Form gönderildi:", info);
        }
        handleClose()
    }
    useEffect(() => { setInfo(selectedData) }, [selectedData])

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
                        {caption.modalHeader}
                    </Typography>
                    <TextField
                        color="warning"
                        label="Name"
                        variant="standard"
                        name="name"
                        value={info.name || ""}
                        onChange={handleChange}
                    />
                    <TextField
                        color="warning"
                        label="Phone"
                        variant="standard"
                        name="phone"
                        value={info.phone || ""}
                        onChange={handleChange}
                    />
                    <TextField
                        color="warning"
                        label="Address"
                        variant="standard"
                        name="address"
                        value={info.address || ""}
                        onChange={handleChange}
                    />
                    <TextField
                        color="warning"
                        name="image"
                        label="Image"
                        variant="standard"
                        value={info.image || ""}
                        type="text"
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        sx={{ borderRadius: "2rem" }}
                        color="success"
                        variant="contained"
                    >
                        {caption.buttonCaption}
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
