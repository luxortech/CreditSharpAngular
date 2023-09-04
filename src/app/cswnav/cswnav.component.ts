import { Component, OnInit, ViewChild } from '@angular/core';
import { CsWebServiceService } from '../csservices/cswebservice.service';
import { RouterModule,Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { csAsync } from '../csclasses/csglobal';
 

@Component({
  selector: 'app-csw-nav',
  templateUrl: './cswnav.component.html',
  styleUrls: ['./cswnav.component.scss']
})


export class CswNavComponent implements OnInit {
 
  constructor(private router: Router, public csWebService :CsWebServiceService) {       
    this.router.events.subscribe((event: Event) => { 
        if (event instanceof NavigationStart) {  
        }

        if (event instanceof NavigationEnd) { 
            csWebService.currentRoute = event.url.replace("/",""); 
            this.showSidebar = false;                 
        }     
   } ); 
  }

  async : csAsync = new csAsync();
  
  ngOnInit(): void { 
    this.csWebService.checkIfLoggedIn();
  }
  currentRoute: string = "";
  showSidebar : boolean = false;
  sideNavToggle( ) {
    //alert(this.showSidebar);
    this.showSidebar = !this.showSidebar;
  }
  
  logOff() : void {
    this.csWebService.logOut(this.async, this.redirectToHome(this.router));
    this.csWebService.currentAuth.isLoggedIn = false; 
    this.router.navigate(['/home']);
  }

  redirectToHome(router: Router) : void {   
    router.navigate(['/home']);
  }
}
  