import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import {Router} from "@angular/router"
import {CsProduct, Cswdocviewitem} from '../csclasses/csdata';
import {
    CsDownload,
    CsDownloadSearch
  } from '../csclasses/csdata';
import {docviewtype} from '../csclasses/csdata';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { 
    csAuth, 
    csControl, 
    csCurrentUser,
    Csglobal,
    csResp,
    csLogin,
    csAsync
   } from '../csclasses/csglobal';
@Injectable({
  providedIn: 'root'
})
export class CsWebServiceService {

  private creditsharp_api_url: string = 'http://www.csdev.com/CreditSharpWebApi/api';
  // private creditsharp_api_url: string = 'http://www.creditsharp.com/CreditSharpWebApi/api/auth';  
  public currentRoute: string = "";
  public cswDocList : Array<Cswdocviewitem>;
  public creditSharpGlobal: Csglobal = new Csglobal();
  public currentAuth: csAuth = new csAuth();
   
  /*  httpOptions = {
    
    credentials: 'same-origin',
    headers: new HttpHeaders(
      { 
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
    }),    
    
  };  */
  httpOptions = {
    withCredentials: true ,
    headers: new HttpHeaders(
      { 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }),    
  };
  
  

  public downloadsLists   : Array<CsDownload> = new Array<CsDownload>();
  public productList      : Array<CsProduct>  = new Array<CsProduct>();
  public myDownloadsLists : Array<CsDownload> = new Array<CsDownload>();



  constructor(private http: HttpClient , private sanitizer: DomSanitizer) {  
    
    this.creditSharpGlobal = new Csglobal();
    this.creditSharpGlobal.isLoggedIn = true;
    this.cswDocList = [];
  };
 
  

  Init() : void {
    
  };
  
 

  /******************************** */
  /// Documentation Functions
  /******************************** */
  LoadDocList() :void {
    this.cswDocList = [];
    this.cswDocList.push(new Cswdocviewitem("DOCUMENTATION",docviewtype.inline,"Show Inline","http://www.creditsharp.com/Documents/Framework/Html/index.html", "FRAMEWORK"));
    this.cswDocList.push(new Cswdocviewitem("DOCUMENTATION",docviewtype.newwindow,"Show In New Window","DOC_WINDOW", "FRAMEWORK"));
    this.cswDocList.push(new Cswdocviewitem("DOCUMENTATION",docviewtype.download,"Show Windows Help File","CREDIT_SHARP.CHM", "FRAMEWORK"));
 
    this.cswDocList.push(new Cswdocviewitem("DOCUMENTATION",docviewtype.inline,"Show Inline","http://www.creditsharp.com/Documents/Extensions/Html/index.html","EXTENSIONS"));
    this.cswDocList.push(new Cswdocviewitem("DOCUMENTATION",docviewtype.newwindow,"Show In New Window","DOC_WINDOW","EXTENSIONS"));
    this.cswDocList.push(new Cswdocviewitem("DOCUMENTATION",docviewtype.download,"Show Windows Help File","CREDIT_SHARP.CHM","EXTENSIONS"));

    this.cswDocList.push(new Cswdocviewitem("DOCUMENTATION",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","REST"));
    this.cswDocList.push(new Cswdocviewitem("DOCUMENTATION",docviewtype.newwindow,"Show In New Window (If PDF In Browser Enabled)" ,"DOC_WINDOW","REST"));
    this.cswDocList.push(new Cswdocviewitem("DOCUMENTATION",docviewtype.download,"Download REST Service PDF","CREDIT_SHARP_REST.CHM","REST"));

    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","CREDITSHARP_JSON"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download C# Class","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","CREDITSHARP_JSON"));
   
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","NORMAILZED_DATA_XML"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download XSD Schemas","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","NORMALIZED_DATA_XML"));
  
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","NORMAILZED_DATA_JSON"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download XSD Schemas","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","NORMALIZED_DATA_JSON"));

    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","EQUIFAX_DATA_XML"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download XSD Schemas","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","EQUIFAX_DATA_XML"));

    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","EQUIFAX_DATA_JSON"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download XSD Schemas","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","EQUIFAX_DATA_JSON"));

    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","EXPERIAN_DATA_XML"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download XSD Schemas","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","EXPERIAN_DATA_XML"));

    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","EXPERIAN_DATA_JSON"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download XSD Schemas","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","EXPERIAN_DATA_JSON"));

    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","TRANSUNION_DATA_XML"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download XSD Schemas","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","TRANSUNION_DATA_XML"));

    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","TRANSUNION_DATA_JSON"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download XSD Schemas","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","TRANSUNION_DATA_JSON"));

    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","ANALYZE_DATA_XML"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download XSD Schemas","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","ANALYZE_DATA_XML"));

    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","ANALYZE_DATA_JSON"));
    this.cswDocList.push(new Cswdocviewitem("SCHEMAS",docviewtype.inline,"Download XSD Schemas","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","ANALYZE_DATA_JSON"));






    this.cswDocList.push(new Cswdocviewitem("RECIPIES",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","REST"));
    this.cswDocList.push(new Cswdocviewitem("RECIPIES",docviewtype.newwindow,"Show In New Window (If PDF In Browser Enabled)" ,"DOC_WINDOW","REST"));
    this.cswDocList.push(new Cswdocviewitem("RECIPIES",docviewtype.download,"Download REST Service PDF","CREDIT_SHARP_REST.CHM","REST"));

    this.cswDocList.push(new Cswdocviewitem("PROJECTS",docviewtype.inline,"Show Inline (If PDF In Browser Enabled)","http://www.creditsharp.com/Documents/Service/CreditSharp Credit Service.pdf","REST"));
    this.cswDocList.push(new Cswdocviewitem("PROJECTS",docviewtype.newwindow,"Show In New Window (If PDF In Browser Enabled)" ,"DOC_WINDOW","REST"));
    this.cswDocList.push(new Cswdocviewitem("PROJECTS",docviewtype.download,"Download REST Service PDF","CREDIT_SHARP_REST.CHM","REST"));

  }
  docFilter( area:string, subject:string): Array<Cswdocviewitem> {
    return this.cswDocList.filter(function(element,index,array){
      return (element.area == area &&  element.subject == subject)  
    });
  }


  docShowHide(_switch: any, _doccategory: string) : void { 
    if (_switch.doccategory == _doccategory)
    {
      _switch .show=  !_switch.show;
    } else {
      _switch.doccategory = _doccategory;
      _switch .show = true;
    }    
  }


  getInlineUrl(inlineUrl: any, area: string) { 
    if (inlineUrl.area == area) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(inlineUrl.target)
    }
    return ""; 
  }
  resetUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("");
  }

  /******************************** */
  /// Authentication
  /******************************** */
  getAuth() : void {
    var resp: csResp ;
    var url = this.creditsharp_api_url + "/auth/IsLoggedIn";   


    this.http.get(url).subscribe(data => {      
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control;
      this.currentAuth = <csAuth> resp.data;  
      },);  
  }

  checkIfLoggedIn() : void {
    var url = this.creditsharp_api_url + "/auth/IsLoggedIn";   
    this.http.get(url, this.httpOptions).subscribe(data => {
      var resp: csResp = <csResp> data;
      this.currentAuth = <csAuth> resp.data; 
    })
  };

  login(async: csAsync, callbackFunction: any,  userId: string, password:string) : void {
    async.inProgress = true;
    async.message = "Logging in...";
    var resp: csResp ;
    var url = this.creditsharp_api_url + "/auth/Login";   

    var req: csLogin = new (csLogin);
    req.userId = userId;
    req.password = password;

    this.http.post(url,req,this.httpOptions).subscribe(data => { 
          
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control;
      this.currentAuth = <csAuth> resp.data; 
      if (this.currentAuth.isLoggedIn) {
        async.inProgress = false; 
        async.success = true;
        async.message = "";
        callbackFunction();
      } else {
        async.inProgress = false; 
        async.success = false;
        async.message = this.currentAuth.message;
      }
      },
      );  
  }

  logOut(async: csAsync, callbackFunction: any) : void {
    async.inProgress = true;
    async.message = "Logging out...";
    var resp: csResp ;
    var url = this.creditsharp_api_url + "/auth/Logout";   
    this.http.post(url,null,this.httpOptions).subscribe(data => {          
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control;
      this.currentAuth = new csAuth();
      if (resp.control.success) {
        async.inProgress = false; 
        async.success = true;
        async.message = "";
        callbackFunction();
      } else {
        async.inProgress = false; 
        async.success = false;
        async.message = resp.control.statusMessage;
      }
      },
    );  
  }

  /******************************** */
  /// Downloads and Products
  /******************************** */

  searchDownloads(async: csAsync, searchParms: CsDownloadSearch) : void {

    async.inProgress = true;
    async.message = "Searching downloads...";
    var req = {
      id: searchParms.id,
      searchKey: searchParms.searchKey,
      dateFrom: searchParms.dateFrom,
      dateTo: searchParms.dateTo
    }
    var resp: csResp ;
    var url = this.creditsharp_api_url + "/site/SearchDownloads";  

    this.http.post(url, req, this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control;
      this.downloadsLists = <Array<CsDownload>> resp.data; 
      this.downloadsLists.forEach(d=> {d.show = false});
      async.inProgress = false; 
      async.success = true;
      async.message = "";
      },
    );
  }

  listMyDownloads(async: csAsync) : void {

    async.inProgress = true;
    async.message = "Loading my downloads...";    
    var resp: csResp ;
    var url = this.creditsharp_api_url + "/my/ListMyDownloads";  

    this.http.get(url,  this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control;
      this.myDownloadsLists = <Array<CsDownload>> resp.data; 
      async.inProgress = false; 
      async.success = true;
      async.message = "";
      },
    );
  }

  listProducts(async: csAsync, callback: Function) : void { 

    async.inProgress = true;
    async.message = "Loading products...";    
    var resp: csResp ;
    var url = this.creditsharp_api_url + "/site/ListProducts";  

    this.http.get(url,  this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control;
      this.productList = <Array<CsProduct>> resp.data; 
      async.inProgress = false; 
      async.success = true;
      async.message = "";
      const id = (this.productList.length > 0) ? this.productList[0]?.id : 0;
      callback(id);
      },
    );
  }
}
