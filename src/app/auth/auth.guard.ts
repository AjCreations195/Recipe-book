import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";
import { AuthService } from "./auth.service";
import * as FromApp from '../store/app.reducer';
import { Store } from "@ngrx/store";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService,
        private store: Store<FromApp.AppState>,
        private router:Router){}
    canActivate(route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot):
         | boolean | UrlTree 
         | Promise<boolean | UrlTree> 
         | Observable<boolean | UrlTree> {
        return this.store.select('auth').pipe(
            take(1),
            map(authState =>{
                return authState.user
            }),
            map( user =>{
                const isAuth = !!user;
                if(isAuth){
                    return true
                }
                return this.router.createUrlTree(['/auth'])
            }
        )
        // tap(
        //     isAuth=>{
        //         if(!isAuth){
        //             this.router.navigate(['/auth'])
        //         }
        //     })
        );
    }
}