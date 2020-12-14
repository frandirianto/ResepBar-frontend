import Category from './category';
import { Review } from './review';
import { Tag } from './tag';

export interface Recipe {
    id: number;
    category: Category;
    name: string;
    description: string;
    guide: string;
    photo: string;
    tags: Tag[];
    reviews: Review[];
}
