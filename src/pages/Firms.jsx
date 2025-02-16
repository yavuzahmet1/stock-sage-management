import { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Container } from '@mui/material'

const Firms = () => {
    const { getStockData, deleteStockData } = useStockCall()
    const { firms } = useSelector(state => state.stock)

    useEffect(() => {
        getStockData("firms")

    }, [])
    const handleNewFirm = () => {
        console.log('New Firm clicked');

    };
    return (
        <Container>
            <Typography fontFamily="Apple Color Emoji" textAlign="center" variant='h4' >FIRMS</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: 2, }}>

                <Button
                    variant="contained"
                    color="success"
                    onClick={handleNewFirm}
                    size='large'
                >
                    Add Firm
                </Button>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', padding: '1rem' }}>


                {firms.map(({ _id, image, name, address, phone }) => (

                    <Card key={name} sx={{ maxWidth: 345, m: "0.3rem", padding: "1rem" }}>

                        <Typography fontFamily="arial" gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>

                        <Typography variant="h9" fontFamily="arial" sx={{ color: 'text.secondary', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
                            <Typography fontFamily="Apple Color Emoji" variant="body2" sx={{ color: 'text.secondary' }}>
                                {phone}
                            </Typography>
                            <Box sx={{ mt: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
                                <Button size="medium" variant="contained"><AppRegistrationIcon />  Edit</Button>
                                <Button size="medium" variant="contained" startIcon={<DeleteIcon />}
                                    onClick={() => deleteStockData("firms", _id)}
                                >
                                    Delete
                                </Button>

                            </Box>
                        </CardContent>

                    </Card>

                ))}
            </Box>
        </Container>
    )
}

export default Firms