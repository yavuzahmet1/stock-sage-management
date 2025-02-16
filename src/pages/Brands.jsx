import { useEffect } from 'react'
import useStockCall from '../hook/useStockCall'
import { useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Container } from '@mui/material'

const Brands = () => {

    const { getStockData } = useStockCall();
    const { brands } = useSelector((state => state.stock))

    useEffect(() => {
        getStockData("brands")
    }, [])

    const handleNewFirm = () => {
        console.log('New Firm clicked');

    };
    return (
        <Container>
            <Typography fontFamily="Apple Color Emoji" textAlign="center" variant='h4' >BRANDS</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'flex-start', ml: 2, }}>

                <Button
                    variant="contained"
                    color="success"
                    onClick={handleNewFirm}
                    size='large'
                >
                    Add Brand
                </Button>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', padding: '1rem' }}>


                {brands.map(({ image, _id, name }) => (

                    <Card key={_id} sx={{ maxWidth: 345, m: "0.3rem", padding: "1rem" }}>

                        <Typography fontFamily="arial" gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>

                        <CardMedia
                            sx={{ objectFit: "contain", width: '100%', height: '200px', aspectRatio: '16/9', overflow: "hidden" }}
                            component="img"
                            height="140"
                            image={image}
                            alt="image"
                        />
                        <CardContent>

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
        </Container>
    )

}

export default Brands