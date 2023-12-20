import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { CsCustomer } from 'src/app/csclasses/csdata';
import { csAsync } from 'src/app/csclasses/csglobal';
import { CsWebServiceService } from 'src/app/csservices/cswebservice.service'; 

@Component({
  selector: 'app-cswadmin-customer-details',
  templateUrl: './cswadmin-customer-details.component.html',
  styleUrls: ['./cswadmin-customer-details.component.css']
})
export class CswadminCustomerDetailsComponent {

  @Input()  currentCustomer : CsCustomer = new CsCustomer() ;
  @Output() parentCustomerNameChanged: EventEmitter<any> = new EventEmitter();

  customerNameChanged(name : string) {
    this.parentCustomerNameChanged.emit(name);
  }
}
