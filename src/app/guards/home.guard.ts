import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Data, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
    providedIn: 'root'
})
export class HomeGuard implements CanActivate {

    constructor( private dataService: DataService,
                 private router: Router  ){ }

    canActivate( ): boolean {
        if(this.dataService.getAutenticated()){
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}
