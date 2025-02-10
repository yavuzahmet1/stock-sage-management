import { Button, TextField } from '@mui/material'
import React from 'react'

const LoginForm = ({
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

export default LoginForm