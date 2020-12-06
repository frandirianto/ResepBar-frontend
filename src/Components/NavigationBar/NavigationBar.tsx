import React from "react";
import TextField from "@material-ui/core/TextField";
import {
    AppBar,
    Box,
    InputBase,
    List,
    ListItem,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    listNav: {
        display: "flex",
        alignItems: "center",
        width: "300px",
    },
    linkNav: {
        textDecoration: "none !important",
        "&:hover": {
            fontWeight: "500",
        },
    },
    logo: {
        marginRight: "32px",
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,

        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
        "&:focus": {
            width: "300px",
        },
    },
}));

function NavigationBar() {
    const classes = useStyles();

    return (
        <AppBar position="absolute" color="primary">
            <Toolbar className={classes.toolbar}>
                <Box display="flex">
                    <Typography variant="h6" className={classes.logo}>
                        ResepBar
                    </Typography>
                    <Box className={classes.search}>
                        <Box className={classes.searchIcon}>
                            <SearchIcon />
                        </Box>
                        <InputBase
                            placeholder="Search"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Box>
                </Box>
                <List className={classes.listNav}>
                    <ListItem>
                        <Link
                            className={classes.linkNav}
                            component={RouterLink}
                            to="/home"
                            variant="body2"
                            color="secondary"
                        >
                            {"Home"}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            className={classes.linkNav}
                            component={RouterLink}
                            to="/login"
                            variant="body2"
                            color="secondary"
                        >
                            {"Sign In"}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            className={classes.linkNav}
                            component={RouterLink}
                            to="/register"
                            variant="body2"
                            color="secondary"
                        >
                            {"Sign Up"}
                        </Link>
                    </ListItem>
                </List>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;
