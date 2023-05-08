import { AppBar, Box, Typography } from "@mui/material";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { Link } from "react-router-dom";

function Navbar({ toggleDark, changeMode }) {

    return (
        <AppBar sx={{
            position: "static",
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "8vh",
            backgroundColor: '#331832'
        }}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: 'none'
            }}>
                <Link sx={{ textDecoration: 'none' }} to={"/"}>
                    <Typography variant="h3" sx={{ color: '#FDF0D5', textDecoration: 'none', display: { xs: "none", lg: "block" } }}>The <strong>Phone</strong> Cave</Typography>
                </Link>
                
                <Link to={"/"}>
                    <SmartphoneIcon sx={{
                        display: { xs: "block", lg: "none" },
                        ml: 1,
                        fontSize: "3em",
                        color: '#FDF0D5'
                    }} />
                </Link>
            </Box>

        </AppBar>
    );
}

export default Navbar;