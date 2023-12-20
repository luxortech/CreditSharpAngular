import { EmitterVisitorContext } from '@angular/compiler';
import { Component , EventEmitter, Input, Output, OnChanges,SimpleChanges} from '@angular/core';
import { csAsync } from 'src/app/csclasses/csglobal';
import { CsWebServiceService } from 'src/app/csservices/cswebservice.service';

@Component({
  selector: 'app-csadmin-notifications',
  templateUrl: './csadmin-notifications.component.html',
  styleUrls: ['./csadmin-notifications.component.css']
})

export class CsadminNotificationsComponent {

  @Input()  show = false;
  @Output() showChange = new EventEmitter<boolean>();

  async                   = new csAsync();

  closeModal() {
    this.show = false;
    this.showChange.emit(this.show);
  }
  
  ngOnInit(): void {
      
  }
  
  
  
  ngOnChanges(changes: SimpleChanges) {
    if (this.show === true ) { 
    }
  }
}
