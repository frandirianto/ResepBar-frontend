import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import usePostMutation from "../../Effects/usePostMutation";
import { setCookie } from "../../Utils/cookie";

const useStyles = makeStyles((theme) => ({
    loginCard: {
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

const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
});

function LoginCard() {
    const classes = useStyles();
    const history = useHistory();

    const { getFieldProps, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            mutate(values);
        },
    });

    const onSuccess = (response: any) => {
        if (response.data.token_type === "Bearer") {
            const diffTime: number = Math.abs(
                new Date(response.data.expires_at).getTime() -
                    new Date().getTime()
            );
            const diffDays: number = Math.ceil(
                diffTime / (1000 * 60 * 60 * 24)
            );
            setCookie("_t", response.data.access_token, diffDays);
            history.push("/home");
        }
    };

    const [mutate, { isLoading }] = usePostMutation(
        process.env.REACT_APP_DEFAULT_API + "login",
        onSuccess
    );

    return (
        <Box
            className={classes.loginCard}
            width="500px"
            margin="0 auto"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Typography component="h1" variant="h5">
                {"Login"}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    autoComplete="email"
                    autoFocus
                    {...getFieldProps("email")}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    {...getFieldProps("password")}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Login
                </Button>
                <Box>
                    {"Don't have an account? "}
                    <Link component={RouterLink} to="/register" variant="body2">
                        {"Register"}
                    </Link>
                </Box>
            </form>
        </Box>
    );
}

export default LoginCard;
