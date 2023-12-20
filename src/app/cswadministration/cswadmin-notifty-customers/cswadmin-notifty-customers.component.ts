import { EmitterVisitorContext } from '@angular/compiler';
import { Component , EventEmitter, Input, Output, OnChanges,SimpleChanges} from '@angular/core';
import { CsDownload, CsNotificationProfile, CsProduct } from 'src/app/csclasses/csdata';
import { csAsync } from 'src/app/csclasses/csglobal';
import { CsWebServiceService } from 'src/app/csservices/cswebservice.service';

@Component({
  selector: 'app-cswadmin-notifty-customers',
  templateUrl: './cswadmin-notifty-customers.component.html',
  styleUrls: ['./cswadmin-notifty-customers.component.css']
})
export class CswadminNotiftyCustomersComponent {
  constructor(_csWebService : CsWebServiceService) {
    this.csWebService = _csWebService;
  }

  @Input()  show = false;
  @Output() showChange = new EventEmitter<boolean>();

  @Input()  download        :  CsDownload = new CsDownload();
  @Input()  productId       = 0;
  @Input()  productTitle    = "";


  csWebService        : CsWebServiceService;
  async               = new csAsync();
  notificationUsers   = new Array<CsNotificationProfile>();

  closeModal() {
    this.show = false;
    this.showChange.emit(this.show);
  }

  convertToHTML(inData : string) {
    const regX = /\n/g;
    let wrkData = inData;
    wrkData = wrkData.replace(regX, "<br/>"); 
    return wrkData;
}
  
  ngOnInit(): void {
       
  }

  loadNotificationUsers() {
    this.csWebService.listCustomersToNotify(this.async, this.productId, (c : Array<CsNotificationProfile>)  => {
      this.notificationUsers = c;
    });
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (this.show === true ) { 
      this.loadNotificationUsers();
    }
  }
}
