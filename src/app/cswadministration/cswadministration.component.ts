import { Component, OnInit } from '@angular/core';
import { CsWebServiceService } from '../csservices/cswebservice.service';
import { csAsync } from '../csclasses/csglobal';

@Component({
  selector: 'app-csw.administration',
  templateUrl: './cswadministration.component.html',
  styleUrls: ['./cswadministration.component.scss']
})
export class CswAdministrationComponent implements OnInit {
  csWebService: CsWebServiceService; 
  constructor(_csWebService: CsWebServiceService) {
    this.csWebService = _csWebService;
   }

   async: csAsync = new csAsync();
   active         = 0;
  
    
     
   
     onTabChange(e: any) : void {
   
       this.active = e;
       
     }
  ngOnInit(): void {
    // this.csWebService.getAuth();
  }

}
