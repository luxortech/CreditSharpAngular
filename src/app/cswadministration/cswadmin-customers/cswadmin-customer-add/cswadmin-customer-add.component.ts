import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, OnChanges, ViewChild,TemplateRef, ElementRef, SimpleChanges } from '@angular/core';
import { CsCustomer } from 'src/app/csclasses/csdata';
import { csAsync } from 'src/app/csclasses/csglobal';
import { CsWebServiceService } from 'src/app/csservices/cswebservice.service';

@Component({
  selector: 'app-cswadmin-customer-add',
  templateUrl: './cswadmin-customer-add.component.html',
  styleUrls: ['./cswadmin-customer-add.component.css']
})
export class CswadminCustomerAddComponent implements OnChanges {
  constructor(_csWebService: CsWebServiceService) {
    this.csWebService = _csWebService;
  }
  
  csWebService : CsWebServiceService;
  async: csAsync        = new csAsync();
  newCustomer : CsCustomer = new CsCustomer();

  @Input()  show        = false;   
  @Input()  customerId   = 0;
  @Output() customerCallBack   = new EventEmitter();
  @Output() customerIdChange   = new EventEmitter<number>();
  @Output() showChange  = new EventEmitter<boolean>();


  customerName  = ""; 
  
saveNewCustomer() {  
  this.newCustomer.id = 0;
  this.newCustomer.name = this.customerName; 
  this.csWebService.saveCustomer(this.async,this.newCustomer, (c: CsCustomer) => {
    this.newCustomer = c;
    this.customerId = c.id;
    this.listCustomers();
  });
}

listCustomers() : void { 
  this.csWebService.listCustomers(this.async, () => {
    this.closeModal();
  }); 
}

closeModal() {
  this.show = false;
  this.showChange.emit(this.show);
  this.customerCallBack.emit(this.customerId);
  //this.productIdChange.emit(this.productId);
  //this.dialog.closeAll();
}

openModal() {
 // const config : MatDialogConfig = new MatDialogConfig();
  //config.hasBackdrop = true;
 // this.dialog.open(this.myModal,config);
} 

ngOnChanges(changes: SimpleChanges) {
  if (this.show === true ) {
   // this.show = false;
    // this.showChange.emit(this.show);
    this.openModal();
  }
}
}