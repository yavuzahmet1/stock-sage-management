import { Button, TextField, Grid, Box, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const RegisterForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        name="username"
                        label="User Name"
                        variant="outlined"
                        fullWidth
                        value={values.username}
                        onChange={handleChange}
                        helperText={touched.username && errors.username}
                        onBlur={handleBlur}
                        error={touched.username && errors.username}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        value={values.firstName}
                        onChange={handleChange}
                        helperText={touched.firstName && errors.firstName}
                        onBlur={handleBlur}
                        error={touched.firstName && errors.firstName}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        value={values.lastName}
                        onChange={handleChange}
                        helperText={touched.lastName && errors.lastName}
                        onBlur={handleBlur}
                        error={touched.lastName && errors.lastName}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="email"
                        label="e-mail"
                        variant="outlined"
                        fullWidth
                        value={values.email}
                        onChange={handleChange}
                        helperText={touched.email && errors.email}
                        onBlur={handleBlur}
                        error={touched.email && errors.email}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        value={values.password}
                        onChange={handleChange}
                        helperText={touched.password && errors.password}
                        onBlur={handleBlur}
                        error={touched.password && errors.password}
                        margin="normal"
                    />
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="success"
                type="submit"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
            >
                Sign Up
            </Button>
        </Box>
    );
};

export default RegisterForm;