import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import "../../app.css"

const AuthHeader = () => {
  return (
    <Grid item xs={12} mb={3} direction="row-reverse">
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1, textAlign: "center", fontFamily: "Playfair Display" }}>
              Stock Sage Management
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
};

export default AuthHeader;
