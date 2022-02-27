import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes:Routes=[
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',
    loadChildren:() =>import('./recipes/recipes.module')
     .then(x => x.RecipesModule)},
     {path:'shopping-list',
    loadChildren:() =>import('./shopping-list/shoopping-list.module')
     .then(x => x.ShoppingListModule)},
     {path:'auth',
    loadChildren:() =>import('./auth/auth.module')
     .then(x => x.AuthModule)}
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })],
    exports:[RouterModule]
})
export class AppRoutingModule{}