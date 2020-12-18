import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    boxImg: { marginRight: theme.spacing(2) },
    img: {
        margin: "8px 0",
        width: "100px",
        height: "100px",
        objectFit: "contain",
        borderRadius: "100%",
        border: "1px solid grey",
    },
}));

interface IProps {
    photo?: File;
    src?: string;
}

export function UploadProfilePicture({ photo }: IProps) {
    const classes = useStyles();

    return (
        <Box className={classes.boxImg} width="inherit">
            <img
                className={classes.img}
                src={URL.createObjectURL(photo)}
                alt="upload"
            />
        </Box>
    );
}

export function ProfilePicture({ src }: IProps) {
    const classes = useStyles();

    return (
        <Box className={classes.boxImg} width="inherit">
            <img className={classes.img} src={src} alt="profile" />
        </Box>
    );
}
