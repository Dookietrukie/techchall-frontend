import { useEffect, useState } from "react";
import phoneServices from "../services/phone.services";
import { Box, Button, Card, CardContent, CardMedia, Chip, CircularProgress, Typography } from "@mui/material";

function PhoneList() {

    const [phones, setPhones] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const getAllPhones = () => {
        phoneServices.getAllPhones()
            .then( response => {
                setPhones(response.data);
            })
            .catch( error => {
                setErrorMessage(error.data.message);
            }
        );
    }

    useEffect(() => {
        getAllPhones();
    }, [])

    return (    
        <>
            {phones === null 
            ? 
            
            <Box sx={{display: 'flex', justifyContent: 'center', width: '35vw', marginTop: '10%'}}>
                <CircularProgress />
            </Box>

            : 
            <Box sx={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', width: '45vw'}}>
            {phones.map( phone => {
                return(
                    <Card
                        key={phone._id}
                        sx={{
                            width: {xs: 250, md: 300},
                            m:3,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <Box>
                            <CardMedia
                                sx={{ height: 250, width: {xs: 250, md: 300}}}
                                image={`https://raw.githubusercontent.com/JulieIronhack/technical_challenge_WD/main/assets/images/${phone.imageFileName}`}
                                title={phone.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {phone.name}
                                </Typography>
                                <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <Chip sx={{m:1, backgroundColor: '#331832', color: '#FDF0D5'}} label={phone.manufacturer} />
                                    <Chip sx={{m:1, backgroundColor: '#331832', color: '#FDF0D5'}} label={phone.color} />
                                    <Chip sx={{m:1, backgroundColor: '#331832', color: '#FDF0D5'}} label={`${phone.price}€`} />
                                    <Chip sx={{m:1, backgroundColor: '#331832', color: '#FDF0D5'}} label={phone.screen} />
                                    <Chip sx={{m:1, backgroundColor: '#331832', color: '#FDF0D5'}} label={phone.processor} />
                                    <Chip sx={{m:1, backgroundColor: '#331832', color: '#FDF0D5'}} label={`${phone.ram} GB`} />
                                </Box>
                                <Button variant="contained" sx={{width: '150px', m:2}} color='warning'>
                                    SEE DETAILS
                                </Button>
                            </CardContent>
                        </Box>
                    
                    </Card>
                
                )
            }
            )}
            </Box>
            
            }
        </>
    )

};

export default PhoneList;