import { Component, OnInit, OnDestroy} from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Subscription } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import * as FromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.action'
import * as RecipeActions from "../recipes/store/recipe.actions";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated = false;
     isRecipes:Recipe[] =null
     private userSub:Subscription;

    constructor(
       private store:Store<FromApp.AppState>
    ){}
   ngOnInit(): void {
    //  this.isRecipes =  this.recipeService.getRecipes();
     this.userSub = this.store.select('auth')
     .pipe(map( authState =>{
         return authState.user
     }))
     .subscribe(
         user =>{
                this.isAuthenticated = !!user;
                console.log("user is", user);
                
                console.log(!user);
                console.log(!!user);
         }
     )   
   }
    onSaveData(){
            this.store.dispatch(new RecipeActions.StoreRecipes());
    }
    onFetchData(){
        this.store.dispatch( new RecipeActions.FetchRecipes());
    }
    onLogout(){
        this.store.dispatch(new AuthActions.Logout())
    }
    ngOnDestroy(): void {
        this.userSub.unsubscribe()
    }
}