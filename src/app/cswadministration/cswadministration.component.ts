import { Component, OnInit } from '@angular/core';
import { CsWebServiceService } from '../csservices/cswebservice.service';

@Component({
  selector: 'app-csw.administration',
  templateUrl: './cswadministration.component.html',
  styleUrls: ['./cswadministration.component.scss']
})
export class CswAdministrationComponent implements OnInit {
  csWebService: CsWebServiceService
  isLoggedIn: boolean = false;
  constructor(_csWebService: CsWebServiceService) {
    this.csWebService = _csWebService;
   }

  ngOnInit(): void {
    this.csWebService.getAuth();
  }

}
