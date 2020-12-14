import React from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { Recipe } from "../../Interfaces/recipe";
import {Rating} from "@material-ui/lab";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import ClassIcon from '@material-ui/icons/Class';

const useStyles = makeStyles((theme) => ({
    recipeCard: {
        cursor: "pointer",
        borderRadius: theme.spacing(1),
        backgroundColor: "#ffffff",
        width: "290px",
        margin: "8px"
    },
    boxImg:{
        textAlign: "center"
    },
    img:{
        width: "290px",
        objectFit: "contain",
        borderTopLeftRadius: theme.spacing(1),
        borderTopRightRadius: theme.spacing(1),
    },
    durationIcon:{
        padding: "0px 2px",
    },
    categoryIcon:{
        padding: "0px 2px"
    },
    button: {
        padding: "8px 16px",
        borderRadius: theme.spacing(4),
    },
}));

interface IProps{
    recipe: Recipe;
}

export default function RecipeCard({recipe}:IProps){
    const classes = useStyles();
    const countRating = () => {
        let rating: number = 0.0;
        recipe.reviews.forEach(review => {
            rating += review.rating;
        });
        return rating/recipe.reviews.length;
    }
    const rating = countRating();
    console.log(rating ,recipe)

    return (
        <Box className={classes.recipeCard} display="flex" flexDirection="column">
            <Box className={classes.boxImg}>
                <img className={classes.img} src={recipe.photo} alt={recipe.name}/>
            </Box>
            <Box padding="4px 18px" textAlign="left">
                <Typography variant="h6">
                    {recipe.name}
                </Typography>
            </Box>
            <Box padding="0 16px" textAlign="left" display="flex" alignItems="center">
                <Box marginRight="16px"  display="flex" alignItems="center">
                    <ClassIcon className={classes.categoryIcon} fontSize="small"/>
                    <Typography variant="caption">
                        {recipe.category.name}
                    </Typography>
                </Box>
                <Box padding="" display="flex" alignItems="center">
                    <QueryBuilderIcon className={classes.durationIcon} fontSize="small"/>
                    <Typography variant="caption">
                        {"40 Mins"}
                    </Typography>
                </Box>
            </Box>
            <Box padding="4px 16px" textAlign="left" >
                <Rating defaultValue={rating} precision={0.5} size="small" readOnly/>
            </Box>
            <Box padding="4px 18px 8px" textAlign="left">
                <Typography variant="subtitle1">
                    {recipe.description}
                </Typography>
            </Box>
            <Box padding="16px">
                <Button  
                    className={classes.button}
                    type="submit"
                    variant="contained"
                    color="primary"
                    >
                    Let's Cook!
                </Button>
            </Box>
        </Box>
    );
} 
