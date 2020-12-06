import { createMuiTheme } from "@material-ui/core";

let theme = createMuiTheme({
    palette: {
        primary: {
            light: "rgba(0,0,0,0.2)",
            main: "#0A0A0A",
            dark: "#2c2c2c",
        },
        secondary: {
            light: "rgba(0,0,0,0.2)",
            main: "#FFFFFF",
            dark: "#2c2c2c",
        },
        background: {
            default: "#0A0A0A",
            paper: "#FFFFFF",
        },
    },
    // overrides: {
    //     MuiFormLabel: {
    //         root: {
    //             color: "#FFD700",
    //         },
    //     },
    //     MuiInputBase: {
    //         root: {
    //             color: "#FFD700",
    //         },
    //     },
    //     MuiOutlinedInput: {
    //         notchedOutline: {
    //             borderColor: "#FFD700",
    //         },
    //     },
    // },
});

export default theme;
