import { Action } from "@ngrx/store";
import { Recipe } from "../recipe.model";

export const SET_RECIPES = '[recipes] Set Recipes';
export const FETCH_RECIPES ='[recipes] Fetch Recipes'
export const ADD_RECIPE = '[recipes] Add Recipe';
export const UPDATE_RECIPE = '[recipes] Update Recipe';
export const DELETE_RECIPE = '[recipes] Delete Recipe';
export const STORE_RECIPES = '[recipes] Store Recipes';

export class  SetRecipes implements Action {
   readonly type= SET_RECIPES;
   constructor(public payload:Recipe[]){}
}
export class AddRecipe implements Action{
   readonly type = ADD_RECIPE;
   constructor(public payload:Recipe){}
}
export class UpdateRecipe implements Action{
    readonly type = UPDATE_RECIPE;
    constructor(public payload:{newRecipe:Recipe,index:number}){}
 }

 export class DeleteRecipe implements Action{
    readonly type = DELETE_RECIPE;
    constructor(public payload:number){}
 }
export class  FetchRecipes implements Action {
    readonly type= FETCH_RECIPES;
 }
 
 export class StoreRecipes implements Action{
    readonly type = STORE_RECIPES;
 }
export type RecipesActions = SetRecipes |FetchRecipes | AddRecipe
 |UpdateRecipe| DeleteRecipe | StoreRecipes ;