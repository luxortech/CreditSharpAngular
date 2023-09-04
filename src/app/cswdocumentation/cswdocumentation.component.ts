import { Component, OnInit } from '@angular/core';
import { CsWebServiceService } from '../csservices/cswebservice.service'; 
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';

@Component({
  selector: 'app-csw.documentation',
  templateUrl: './cswdocumentation.component.html',
  styleUrls: ['./cswdocumentation.component.scss']
})
export class CswDocumentationComponent implements OnInit {

  constructor(public webService :CsWebServiceService, public sanitizer: DomSanitizer) { }
  active = 0;
  
/*   inlineUrl = { target:"", area:""};  
  docView = {show: false, doccategory:""}; */
  

  onTabChange(e: any) : void {

    this.active = e;
    
  }

  /* closeIframe(inlineUrl: any) {
    alert(JSON.stringify( inlineUrl));
    inlineUrl.target = "";
  } */

  /* docFilter(data: Array<Cswdocviewitem>, area:string, subject:string): Array<Cswdocviewitem> {
    return data.filter(function(element,index,array){
      return (element.area == area &&  element.subject == subject)  
    });
  } */

 /*  showHide(_switch: any, _doccategory: string) : void { 
    if (_switch.doccategory == _doccategory)
    {
      _switch .show=  !_switch.show;
    } else {
      _switch.doccategory = _doccategory;
      _switch .show = true;
    }    
  } */

  /* getInlineUrl(inlineUrl: any, area: string) { 
    if (inlineUrl.area == area) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(inlineUrl.target)
    }
    return ""; 
  } */
  ngOnInit(): void {  
    
  }

}
