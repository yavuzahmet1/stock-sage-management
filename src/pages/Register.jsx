import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/register.jpg";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Must contain at least one lowercase letter')
    .matches(/\d/, 'Must contain at least one number')
    .matches(/[!@#$%^&*+=]/, 'Must contain at least one special character')
    .matches(/^[^\s]+$/, 'Cannot contain spaces')
    .required('Required')
});

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        justifyContent="center"
        container
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema
            }
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
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
            )}
          </Formik>
          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
