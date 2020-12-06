import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { RegisterUser } from "../../Interfaces/user";
import usePostMutation from "../../Effects/usePostMutation";

const useStyles = makeStyles((theme) => ({
    registerCard: {
        padding: theme.spacing(4),
        borderRadius: theme.spacing(1),
        backgroundColor: "#ffffff",
    },
    form: {
        width: "100%",
    },
    submit: {
        padding: theme.spacing(2),
        margin: theme.spacing(2, 0, 2),
        borderRadius: theme.spacing(4),
    },
}));

const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
});

function RegisterCard() {
    const classes = useStyles();

    const { getFieldProps, handleSubmit } = useFormik({
        initialValues: {
            fullname: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            mutate(values);
        },
    });

    const onSuccess = (response: any) => {
        console.log(status, isLoading);
        console.log(response);
    };

    const [mutate, { status, isLoading }] = usePostMutation(
        process.env.REACT_APP_DEFAULT_API + "register",
        onSuccess
    );

    return (
        <Box
            className={classes.registerCard}
            width="500px"
            margin="0 auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Typography component="h1" variant="h5">
                Register
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Full Name"
                    autoComplete="fullname"
                    autoFocus
                    {...getFieldProps("fullname")}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Username"
                    autoComplete="username"
                    {...getFieldProps("username")}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    {...getFieldProps("email")}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    {...getFieldProps("password")}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    {...getFieldProps("confirmPassword")}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
                <Box>
                    {"Already have an account? "}
                    <Link component={RouterLink} to="/login" variant="body2">
                        {"Sign In"}
                    </Link>
                </Box>
            </form>
        </Box>
    );
}

export default RegisterCard;
