import { Component, OnInit , Input} from '@angular/core';
import { CsCustomer } from 'src/app/csclasses/csdata';
import { csAsync } from 'src/app/csclasses/csglobal';
import { CsWebServiceService } from 'src/app/csservices/cswebservice.service'; 

@Component({
  selector: 'app-cswadmin-customers',
  templateUrl: './cswadmin-customers.component.html',
  styleUrls: ['./cswadmin-customers.component.css']
})
export class CswadminCustomersComponent implements OnInit {
  constructor(_csWebService : CsWebServiceService) { this.csWebService = _csWebService}
  csWebService          : CsWebServiceService;

  @Input()              async: csAsync = new csAsync(); 

  showAdd               = false;
  showUpload            = false;
  showNotifications     = false;
  
  uploadDownloadTitle   = "";
  uploadProductTitle    = "";

  currentCustomer = new CsCustomer();
  customerId             = 0;
  name                  = "";
  address               = "";
  city                  = ""; 
  state                 = "";
  zip                   = "";
  contactName           = "";
  contactEmail          = "";
  contactPhone          = "";
  contactFax            = ""; 
  updateNotificationEmail = "";
  deleteCustomerName    = "";
  saveCustomerName      = "";
  confirmDeleteMessage  = "";
  confirmCustomerDeleteMessage = ""; 

 
  showDelete            = false; 
  active                = 0;
  
    
     
   
     onTabChange(e: any) : void {   
       this.active = e;       
     }

 

  onDeleteClick() {
    // this.csWebService.checkDeleteCustomer(this.async,this.customerId, (msg: string) => {
    //   this.deleteCheckCallback(msg);
    // })
  }

  deleteCheckCallback(message : string) {
    this.confirmDeleteMessage = `${message}<br/> Do you really want to delete ${this.name}?`;
    this.showDelete = true;
  }

  deleteCustomer() {
    this.csWebService.deleteProduct(this.async, this.customerId, this.name, () => {
      this.deleteCustomerCallback();
    })  
  }

  deleteCustomerCallback() {
    this.listCustomers(0);
  }
  

  listCustomers(customerId: number) : void { 
    this.csWebService.listCustomers(this.async, (id: number, idx: number) => {
      if (customerId > 0) {
        this.customerSelected(customerId)
      } else {
        this.getCustomer(idx);
      }      
    }); 
  }

  showAddNew() {
    this.showAdd = true;
  }

  setButtonTitles(title: string) {
    this.deleteCustomerName      = `Delete ${title}`;
    this.saveCustomerName         = `Save ${title}`;
  }

  getCustomer(idx : number) { 
    this.currentCustomer = new CsCustomer();
    this.currentCustomer.id                     = this.csWebService.customerList.at(idx)?.id as number;
    this.currentCustomer.name                   = this.csWebService.customerList.at(idx)?.name as string;
    this.currentCustomer.address                = this.csWebService.customerList.at(idx)?.address as string;
    this.currentCustomer.city                   = this.csWebService.customerList.at(idx)?.city as string; 
    this.currentCustomer.state                  = this.csWebService.customerList.at(idx)?.state as string;
    this.currentCustomer.zip                    = this.csWebService.customerList.at(idx)?.zip as string;
    this.currentCustomer.contactName            = this.csWebService.customerList.at(idx)?.contactName as string;
    this.currentCustomer.contactEmail           = this.csWebService.customerList.at(idx)?.contactEmail as string;
    this.currentCustomer.contactPhone           = this.csWebService.customerList.at(idx)?.contactPhone as string;
    this.currentCustomer.contactFax             = this.csWebService.customerList.at(idx)?.contactFax as string;
    this.currentCustomer.updateNotificationEmail= this.csWebService.customerList.at(idx)?.updateNotificationEmail as string;

    this.setButtonTitles(this.currentCustomer.name); 
  }

   
 
  customerSelected(selectedId : any) {
    let idx = this.csWebService.customerList.findIndex(p => p.id === selectedId);
    idx = (idx === -1) ? 0 : idx;
    this.getCustomer(idx);
  }

  customerNameChanged(name: string) {
    this.setButtonTitles(name);
  }

    

  saveCustomer() {
    const savedCustomer = new CsCustomer();
    savedCustomer.id = this.customerId;
    savedCustomer.name = this.name; 

      this.csWebService.saveCustomer(this.async,savedCustomer, (customer: CsCustomer) => {
      this.listCustomers(customer.id);
     })
  }

   

  ngOnInit() {
    this.listCustomers(0);
  }

}
