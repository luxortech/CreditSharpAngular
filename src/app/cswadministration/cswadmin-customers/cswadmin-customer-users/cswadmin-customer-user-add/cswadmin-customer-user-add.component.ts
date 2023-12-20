import { Component, OnInit , Input, Output, OnChanges, SimpleChanges, EventEmitter} from '@angular/core';
import { CsCustomer, CsProfile } from 'src/app/csclasses/csdata';
import { csAsync } from 'src/app/csclasses/csglobal';
import { CsWebServiceService } from 'src/app/csservices/cswebservice.service'; 

@Component({
  selector: 'app-cswadmin-customer-user-add',
  templateUrl: './cswadmin-customer-user-add.component.html',
  styleUrls: ['./cswadmin-customer-user-add.component.css']
})
export class CswadminCustomerUserAddComponent implements OnChanges {
  constructor(_csWebService: CsWebServiceService) {
    this.csWebService = _csWebService;
  }
  
  csWebService : CsWebServiceService;
  async   : csAsync       = new csAsync();
  newUser : CsProfile     = new CsProfile();

  @Input()  show          = false;   
  @Input()  customerId    = 0;
  @Output() userCallBack  = new EventEmitter(); 
  @Output() showChange    = new EventEmitter<boolean>();
  userName                = ""; 
  newUserId               = 0;
  
  saveNewUser() {  
    this.newUser.id = 0;
    this.newUser.name = this.userName; 
    this.csWebService.saveUser(this.async,this.newUser, this.customerId, (uId: number) => {
      this.newUserId = uId;
    });
  }  
 
  
  closeModal() {
    this.show = false;
    this.showChange.emit(this.show);
    this.userCallBack.emit(this.newUserId);
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