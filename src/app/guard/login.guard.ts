import {CanActivate, ActivatedRouteSnapshot, RouteConfigLoadStart} from "@angular/router";
export class LoginGuard implements CanActivate{
    canActivate(){
        let loggedId:boolean=Math.random()<0.5;
        if (!loggedId){
            console.log('用户未登录');
        }
        return loggedId;
    }
}