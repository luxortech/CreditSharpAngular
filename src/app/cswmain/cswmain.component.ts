import { Component, OnInit } from '@angular/core'; 
import { AppModule } from '../app.module';
import { CsWebServiceService } from '../csservices/cswebservice.service';

@Component({
  selector: 'app-csw-main',
  templateUrl: './cswmain.component.html',
  styleUrls: ['./cswmain.component.scss']
})
export class CswMainComponent implements OnInit {

  constructor(public csWebService :CsWebServiceService) {     
     
   }
    
  today = "";
  ngOnInit(): void {
    this.csWebService.LoadDocList();
    this.today = '2013 - ' + new Date().getFullYear().toString();
  }

}
