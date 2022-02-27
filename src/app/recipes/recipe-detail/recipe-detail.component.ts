import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import * as FromApp from 'src/app/store/app.reducer';
import { Recipe } from '../recipe.model';
import * as RecipeActions from '../store/recipe.actions';
import * as shoppingListActions from '../../shopping-list/store/shopping-list.actions'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe:Recipe;
  id:number
  constructor(
   private route:ActivatedRoute,
   private router: Router,
   private store:Store<FromApp.AppState>
  ) { }

  ngOnInit(): void {
     this.route.params.pipe(map(params =>{
       return +params['id']
     }),switchMap(id =>{
       this.id = id;
       return this.store.select('recipes');
     }),
       map(recipeState =>{
        return recipeState.recipes.find((recipe,index)=>{
           return index === this.id;
         });
       })).subscribe(recipe =>{
          this.recipe = recipe
        });
      }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  onAddToShoppingList(){
    this.store.dispatch(new shoppingListActions.AddIngredients(this.recipe.ingredients))
  }

  onDeleteRecipe(){
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes'])

  }
}
