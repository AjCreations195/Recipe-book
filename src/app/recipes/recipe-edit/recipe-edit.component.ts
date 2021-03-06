import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Subscription } from 'rxjs';
import * as FromApp from 'src/app/store/app.reducer';
import * as RecipeActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit ,OnDestroy {

  id:number;
  editMode=false;
  recipeForm:FormGroup;

  private storeSub:Subscription;
  
  constructor(private route:ActivatedRoute,
    private router :Router,
    private store:Store<FromApp.AppState>) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
          this.id = +params['id']
          this.editMode = params['id'] != null;   
          this.initForm();
      }
    )
  }
  onSubmit(){
    if(this.editMode){
      this.store.dispatch(new RecipeActions.UpdateRecipe({newRecipe:this.recipeForm.value,index:this.id}))
      // this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }else{
      // this.recipeService.addRecipe(this.recipeForm.value);
      this.store.dispatch(new RecipeActions.AddRecipe(this.recipeForm.value));
    }
    this.onCancel()
  }
  get controls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount':new FormControl(null,[
          Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }
  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
  onDeleteAllIngredients(){
    (<FormArray>this.recipeForm.get('ingredients')).clear()
  }

  onCancel(){
      this.router.navigate(['../'],{relativeTo:this.route})
  }

  private initForm(){

    let recipeName= '';
    let recipeImagePath ='';
    let recipeDescription ='';
    let recipeIngredients =new FormArray([]);

    if(this.editMode){
       this.storeSub =   this.store.select('recipes').pipe(
          map(recipeState =>{
          return recipeState.recipes.find((recipe,index)=>{
           return index === this.id;
          })
        })).subscribe(recipe =>{
          console.log(recipe);
          
          recipeName  = recipe.name;
          recipeImagePath = recipe.imagePath;
          recipeDescription = recipe.description;
          if(recipe['ingredients']){
            for(let ingredient of recipe.ingredients){
              recipeIngredients.push(
                new FormGroup({
                  'name':new FormControl(ingredient.name,Validators.required),
                  'amount':new FormControl(ingredient.amount,[
                    Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)
                  ])
                })
              )
            }
          }
        })
        // const recipe = this.recipeService.getRecipe(this.id);
       
    }
    this.recipeForm = new FormGroup({
      'name':new FormControl(recipeName,Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients':recipeIngredients
    })

  }


  ngOnDestroy(): void {
        if(this.storeSub){ 
                 this.storeSub.unsubscribe();
  }
}
}
