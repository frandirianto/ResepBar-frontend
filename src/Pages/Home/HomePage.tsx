import React, { useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import useGetMutation from "../../Effects/useGetMutation";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import recipesState from "../../States/recipe-state";
import { Recipe } from "../../Interfaces/recipe";


const useStyles = makeStyles((theme) => ({
    homePage: {
        paddingTop: theme.spacing(10),
    },
}));

export default function HomePage() {
    const history = useHistory();
    const classes = useStyles();
    const [recipes,setRecipes] = useRecoilState(recipesState);
    const data:Recipe[] = [];

    const onSuccess = (response: any) => {
        if(response.data.recipe.length !== 0){
            response.data.recipe.map((recipe: any) => {
                data.push({
                    id: recipe.id,
                    category: recipe.category,
                    name: recipe.name,
                    description: recipe.description,
                    guide: recipe.guide,
                    photo: recipe.photo,
                    tags: recipe.tags,
                    reviews: recipe.reviews
                });
            })
        }
        setRecipes(data);
    };


    const [mutate, { isLoading }] = useGetMutation(
        process.env.REACT_APP_DEFAULT_API + "get-all-recipe",
        onSuccess,
        true
    );

    useEffect(() => {
        mutate();
    }, [mutate])
    
    console.log(data,recipes)

    return (
        <Box className={classes.homePage} display="flex" flexWrap="wrap">
            {recipes.map((recipe,index) => 
            <>
                <RecipeCard recipe={recipe} key={index}/>
                <RecipeCard recipe={recipe} key={index}/>
                <RecipeCard recipe={recipe} key={index}/>
                <RecipeCard recipe={recipe} key={index}/>
                <RecipeCard recipe={recipe} key={index}/>
            </>
            )}
        </Box>
    );
}
