import { Component, OnInit } from '@angular/core';
import { CswDocumentationComponent } from '../cswdocumentation.component'; 
import { CsWebServiceService } from '../../csservices/cswebservice.service';
import { SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit { 
/* docSource : SafeResourceUrl; */
inlineUrl = { target:"", area:""};  
docView = {show: false, doccategory:""};
  constructor(public webService :CsWebServiceService ) {
    // this.docSource = this.webService.resetUrl();
   }
resetDocUrl()  {
  this.inlineUrl.target = '';
}
getDocUrl() : SafeResourceUrl {
  return this.webService.getInlineUrl(this.inlineUrl,'DOCUMENTATION');
  //this.loadDocUrl()
  //return this.docSource;
 }

 isValidDocUrl() : boolean {
 return (this.webService.getInlineUrl(this.inlineUrl,'DOCUMENTATION') != "");
 }
 
 loadDocUrl() {
 // this.docSource = this.webService.getInlineUrl(this.inlineUrl,'DOCUMENTATION');
 }
  
  ngOnInit(): void {
  //  this.loadDocUrl();
  }

}
