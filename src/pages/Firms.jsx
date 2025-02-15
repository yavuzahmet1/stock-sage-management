import React from 'react'
import { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button } from '@mui/material'

const Firms = () => {
    const { getFirms } = useStockCall()
    const dispatch = useDispatch()
    const { firms } = useSelector(state => state.stock)


    useEffect(() => {
        dispatch(getFirms)

    }, [])

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', padding: '1rem' }}>

            {firms.map(({ image, name, address, phone }) => (

                <Card key={name} sx={{ maxWidth: 345, m: "0.3rem", padding: "1rem" }}>

                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {address}
                    </Typography><br />
                    <CardMedia
                        sx={{ objectFit: "contain", width: '100%', height: '200px', aspectRatio: '16/9', overflow: "hidden" }}
                        component="img"
                        height="140"
                        image={image}
                        alt="image"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {phone}
                        </Typography>
                        <Box sx={{ mt: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
                            <Button size="medium" variant="contained"><AppRegistrationIcon />  Edit</Button>
                            <Button size="medium" variant="contained" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>

                        </Box>
                    </CardContent>

                </Card>

            ))}
        </Box>
    )
}

export default Firms