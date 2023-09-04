import { Component, OnInit, Input,SimpleChanges } from '@angular/core';
import { CsWebServiceService } from '../csservices/cswebservice.service';
import { csAsync, Csglobal} from '../csclasses/csglobal';
import {Router} from "@angular/router"

@Component({
  selector: 'app-csw-login',
  templateUrl: './cswlogin.component.html',
  styleUrls: ['./cswlogin.component.scss']
})

export class CswLoginComponent implements OnInit {

  constructor(public _csWebService :CsWebServiceService, public _router: Router) {
    this.csWebService = _csWebService;
    this.router = _router;
    
   }
  
  csWebService : CsWebServiceService;
  router: Router;
  loginId: string = "";
  password: string = "";

 async : csAsync = new csAsync();


  /* ngOnChanges(changes: SimpleChanges): void {
    // won't compile if 'selectedEmployee' is no a property of this component
    const change = changes[nameof<CswLoginComponent>('async')];
    alert(JSON.stringify(change));
    if (change) {
      // casting it, to avoid dumb error that won't throw, like
      // doing `change.currentValue > 0` instead of `change.currentValue.length > 0`
      const previous: string[] = change.previousValue;
      const current: string[] = change.currentValue;

      // do something with it.
    }
  } */


  login(): void {
    //alert(this.loginId + " " + this.password);
    //this.csWebService.getAuth();
    this.csWebService.login(this.async, this.redirectToHome(this.router),this.loginId,this.password);
  }

  redirectToHome(router: Router) : void {   
    router.navigate(['/home']);
  }

  ngOnInit(): void {
  }

}
export const nameof = <T>(name: keyof T) => name;
