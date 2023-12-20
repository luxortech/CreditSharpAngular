import { Component, OnInit,OnChanges, SimpleChanges , Input} from '@angular/core';
import { CsCustomer, CsProfile } from 'src/app/csclasses/csdata';
import { csAsync } from 'src/app/csclasses/csglobal';
import { CsWebServiceService } from 'src/app/csservices/cswebservice.service'; 


@Component({
  selector: 'app-cswadmin-customer-users',
  templateUrl: './cswadmin-customer-users.component.html',
  styleUrls: ['./cswadmin-customer-users.component.css']
})
export class CswadminCustomerUsersComponent implements OnChanges {
  constructor(_csWebService : CsWebServiceService) { this.csWebService = _csWebService}
  csWebService          : CsWebServiceService;

  @Input()  async: csAsync = new csAsync(); 
  @Input()  customerId = 0; 
  @Input()  currentCustomer: CsCustomer = new CsCustomer();

  currentUser           : CsProfile = new CsProfile();
  users                 : Array<CsProfile> = new Array<CsProfile>();

  showAdd               = false;
  showDelete            = false;
  confirmDeleteMessage  = "";   
  deleteUserName        = "";
  saveUserName          = "";

  showAddNew() {
    this.showAdd = true;
  }

  onDeleteClick() {


  }

  setButtonTitles() {
    const title           = this.currentUser.name;
    this.deleteUserName   = `Delete ${title}`;
    this.saveUserName     = `Save ${title}`;
  }
  

  getUser(idx: number) {
    if (idx === -1) {
      this.currentUser                = new CsProfile();
      this.currentUser.showPassword   = false;
      this.currentUser.email          = "";
      this.currentUser.fax            = "";
      this.currentUser.id             = 0;
      this.currentUser.name           = "";
      this.currentUser.notifyOnUpdate = false;
      this.currentUser.password       = "";
      this.currentUser.phone          = "";
      this.currentUser.phoneExtension = "";
      this.currentUser.userId         = "";
    } else {
      this.currentUser                = new CsProfile();
      this.currentUser.showPassword   = false;
      this.currentUser.email          = this.users.at(idx)?.email as string;
      this.currentUser.fax            = this.users.at(idx)?.fax as string;
      this.currentUser.id             = this.users.at(idx)?.id as number;
      this.currentUser.name           = this.users.at(idx)?.name as string;
      this.currentUser.notifyOnUpdate = this.users.at(idx)?.notifyOnUpdate as boolean;
      this.currentUser.password       = this.users.at(idx)?.password as string;
      this.currentUser.phone          = this.users.at(idx)?.phone as string;
      this.currentUser.phoneExtension = this.users.at(idx)?.phoneExtension as string;
      this.currentUser.userId         = this.users.at(idx)?.userId as string;
    }    
  }

  saveUser() {

  }
 

  deleteUser() {

  }

  userNameChanged(newName : string) {
    this.currentUser.name = newName;
    this.setButtonTitles();
  }

  userSelected(selectedId : any) {
    let idx = this.currentCustomer.users.findIndex(p => p.id === selectedId); 
    this.getUser(idx);
    this.setButtonTitles();
    //this.setUserFields(idx);
  }

  // setUserFields(userIdx : number) {
  //   this.currentUser = (this.users.length > 0)  ?
  //     this.users.at(userIdx) as CsProfile :
  //     new CsProfile();
  //   this.setButtonTitles();
  // }

  loadCustomerUsers(customerId : number, idx: number) {
    this.csWebService.listUsersThisCustomer(this.async,this.currentCustomer.id,(users: Array<CsProfile>) => {
      this.loadCustomerUsersCallBack(users, idx);
    });
  }

  loadCustomerUsersCallBack(users : Array<CsProfile>, idx : number) {    
    this.users = this.csWebService.DeepCopy(users);
    let userIdx = (this.users.length === 0) ? -1 : idx;
    this.getUser(userIdx);
    this.setButtonTitles();
    //this.setUserFields(userIdx);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (propName === "currentCustomer") {
        this.loadCustomerUsers(this.currentCustomer.id,0);
        break;
      }
    }       
  }
}
