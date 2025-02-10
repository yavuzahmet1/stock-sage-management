import { Button, TextField } from '@mui/material'
import React from 'react'

const RegisterForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
}) => {
    return (
        <form onSubmit={handleSubmit}>
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
                margin="normal" />
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
                margin="normal" />
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
                margin="normal" />
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
                margin="normal" />
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
                margin="normal" />
            <Button variant="contained" color="success" type="submit" fullWidth>Sign Up</Button>
        </form>
    )
}

export default RegisterForm