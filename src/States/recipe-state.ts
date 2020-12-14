import { atom } from 'recoil';
import { Recipe } from '../Interfaces/recipe';

const recipesState = atom<Recipe[]>({
    key: 'recipesState',
    default: [],
});

export default recipesState;
