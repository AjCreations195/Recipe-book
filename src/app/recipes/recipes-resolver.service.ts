import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, of, switchMap, take } from "rxjs";
import * as FromApp from "../store/app.reducer";
import { Recipe } from "./recipe.model";
import * as RecipeActions from "./store/recipe.actions";

@Injectable({
    providedIn:'root'
})
export class RecipeResolverService implements Resolve<Recipe[]>{
    constructor (private store:Store<FromApp.AppState>,
        private actions$:Actions
    ){}
    resolve(route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot) {
              return this.store.select('recipes').pipe(take(1),
                    map(recipeState =>{
                        return recipeState.recipes;
                    }),
                    switchMap(recipes =>{
                        if(recipes.length===0){
                            this.store.dispatch(new RecipeActions.FetchRecipes());  
                            return this.actions$.pipe(ofType(
                                RecipeActions.SET_RECIPES),take(1)
                        
                    )}
                else{
                    return of(recipes)
                }}
                )
                
                );
           
        }

}