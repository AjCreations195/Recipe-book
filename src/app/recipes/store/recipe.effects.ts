import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap, tap, withLatestFrom } from "rxjs";
import * as FromApp from "src/app/store/app.reducer";
import { Recipe } from "../recipe.model";
import * as RecipeActions from "./recipe.actions";
@Injectable()
export class RecipeEffects{
    @Effect()
    FetchRecipes = this.actions$.pipe(
        ofType(RecipeActions.FETCH_RECIPES),
        switchMap(()=>{
            return this.http.get<Recipe[]>
            ('https://recipe-book-e5d51-default-rtdb.firebaseio.com/recipes.json')
           
        }),map(recipes =>{
            return recipes.map(recipe =>{
                return {...recipe, ingredients:recipe.ingredients ? recipe.ingredients : []}
            })
        }),
        map(recipes =>{
            // this.recipeService.setRecipes(recipes)
           return new RecipeActions.SetRecipes(recipes);
})
    )

    @Effect({dispatch:false})
    storeRecipes= this.actions$.pipe(ofType(RecipeActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState])=>{
      return  this.http.put(
            'https://recipe-book-e5d51-default-rtdb.firebaseio.com/recipes.json'
            ,recipesState.recipes)
         }   )  
    )


    constructor(private actions$:Actions,
        private http :HttpClient,
        private store:Store<FromApp.AppState>){}
}