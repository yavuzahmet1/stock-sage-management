import { Button, TextField } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const LoginForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
}) => {
    const { loading } = useSelector(state => state.auth)
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name="username"
                label="username"
                variant="outlined"
                fullWidth
                value={values.username}
                onChange={handleChange}
                helperText={touched.username && errors.username}
                onBlur={handleBlur}
                error={touched.username && errors.username}
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
            <Button variant="contained" type="submit">
                Sign In
            </Button>

        </form>
    )
}

export default LoginForm