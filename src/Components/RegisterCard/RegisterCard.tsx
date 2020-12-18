import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink, useHistory } from "react-router-dom";
import usePostMutation from "../../Effects/usePostMutation";
import { ValidatePhoto } from "../../Utils/validate";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
    UploadProfilePicture,
    ProfilePicture,
} from "../ProfilePicture/ProfilePicture";

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
    fullname: Yup.string().required("Fullname must be filled"),
    username: Yup.string().required("Username must be filled"),
    email: Yup.string().email("Invalid email").required("Email must be filled"),
    password: Yup.string()
        .min(8, "Password must more than 8 characters")
        .required("Password must be filled"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password")],
        "Passwords must match"
    ),
});

function RegisterCard() {
    const classes = useStyles();
    const history = useHistory();
    const [photo, setPhoto] = useState<File | undefined>();

    const { getFieldProps, handleSubmit, errors, touched } = useFormik({
        initialValues: {
            fullname: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: RegisterSchema,
        onSubmit: (values) => {
            console.log(values);
            const formData = new FormData();
            formData.append("fullname", values.fullname);
            formData.append("username", values.username);
            formData.append("email", values.email);
            formData.append("password", values.password);
            if (photo !== undefined) {
                formData.append("photo", photo);
            }
            mutate(formData);
        },
    });

    const handleChange = (e: any) => {
        if (e.target.name === "photo") {
            setPhoto(e.target.files[0]);
        }
    };

    const onSuccess = (response: any) => {
        // if (response.data.message === "Successfully Registered Account")
        //     history.push("/login");
        // else setError({ type: "e10", message: response.data.message });
    };

    const [mutate, { isLoading }] = usePostMutation(
        process.env.REACT_APP_DEFAULT_API + "registers",
        onSuccess,
        true
    );

    return (
        <Box
            className={classes.registerCard}
            width="500px"
            margin="64px auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Typography component="h1" variant="h5">
                {"Register"}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Full Name"
                    autoComplete="fullname"
                    autoFocus
                    error={errors.fullname !== undefined && touched.fullname}
                    helperText={errors.fullname}
                    {...getFieldProps("fullname")}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Username"
                    autoComplete="username"
                    error={errors.username !== undefined && touched.username}
                    helperText={errors.username}
                    {...getFieldProps("username")}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    error={errors.email !== undefined && touched.email}
                    helperText={errors.email}
                    {...getFieldProps("email")}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Password"
                    type="password"
                    error={errors.password !== undefined && touched.password}
                    helperText={errors.password}
                    {...getFieldProps("password")}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    error={
                        errors.confirmPassword !== undefined &&
                        touched.confirmPassword
                    }
                    helperText={errors.confirmPassword}
                    {...getFieldProps("confirmPassword")}
                />
                <Box display="flex" alignItems="center">
                    {photo !== undefined ? (
                        <UploadProfilePicture photo={photo} />
                    ) : (
                        <ProfilePicture src="https://kuduconsulting.co.zm/wp-content/uploads/2017/11/default-portrait-image-generic-profile.jpg" />
                    )}
                    <Button
                        variant="contained"
                        component="label"
                        color="secondary"
                        className={classes.submit}
                    >
                        Upload Photo
                        <input
                            type="file"
                            hidden
                            name="photo"
                            onChange={handleChange}
                        />
                    </Button>
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Register
                </Button>
                <Box>
                    {"Already have an account? "}
                    <Link component={RouterLink} to="/login" variant="body2">
                        {"Login"}
                    </Link>
                </Box>
            </form>
        </Box>
    );
}

export default RegisterCard;
