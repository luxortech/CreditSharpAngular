import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import {Router} from "@angular/router"
import {CsCustomer, CsDownloadWithImage, CsProduct, CsProfile, CsSetEvalRequest, Cswdocviewitem} from '../csclasses/csdata';
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
  public customerList     : Array<CsCustomer> = new Array<CsCustomer>();
  public myProfile        : CsProfile         = new CsProfile();
  public currentProduct   : CsProduct         = new CsProduct();



  constructor(private http: HttpClient , private sanitizer: DomSanitizer) {  
    
    this.creditSharpGlobal = new Csglobal();
    this.creditSharpGlobal.isLoggedIn = true;
    this.cswDocList = [];
  };
 
  

  Init() : void {
    
  };
  
  DeepCopy(InArray: object) {
    return JSON.parse(JSON.stringify(InArray));
  }

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
        if (callbackFunction) {
          callbackFunction();
        }

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
  /// Profile
  /******************************** */

  loadProfile(async: csAsync, callback :any ) {
    async.inProgress = true;
    async.message = "Loading my profile...";    
    var resp: csResp ;
    var url = this.creditsharp_api_url + "/my/GetMyProfile";  

    this.http.get(url,  this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control;
      this.myProfile =  resp.data as CsProfile; 
      async.inProgress = false; 
      async.success = true;
      async.message = "";
      callback();
      },
    );
  }

  updateProfile(async: csAsync) {
    async.inProgress = true;
    async.message = "Saving my profile...";    
    var resp: csResp ;
    var url = this.creditsharp_api_url + "/my/SaveMyProfile";  

    this.http.post(url,this.myProfile, this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control; 
      async.inProgress = false;
      async.success = control.success;

      if (control.success === true) {
        async.message = "";
      } else { 
        async.message = control.statusMessage;
      }      
      },
    );
  }

  /******************************** */
  /// Downloads and Products
  /******************************** */

  searchDownloads(async: csAsync, searchParms: CsDownloadSearch) : void {

    async.inProgress = true;
    async.message = "Searching releases...";
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

  listDownloadsThisProduct(async: csAsync, productId : number, title: string, callback: Function | null) : void {
    async.inProgress = true;
    async.message = `Loading downloads for ${title} ...`;    
    var resp: csResp ;
    var url = this.creditsharp_api_url + `/admin/ListDownloadsThisProduct/${productId}`;  

    this.http.get(url,  this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control;      
      async.inProgress = false; 
      async.success = true;
      async.message = "";
      if (callback != null)
        callback(resp.data as Array<CsDownload>);
      },
    );
  }

  listProducts(async: csAsync, isPublic: boolean, callback: Function | null) : void {
    async.inProgress = true;
    async.message = "Loading products...";    
    var resp: csResp ;
    var url = this.creditsharp_api_url + `/site/ListProducts/${isPublic}`;  

    this.http.get(url,  this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control;
      this.productList = <Array<CsProduct>> resp.data; 
      async.inProgress = false; 
      async.success = true;
      async.message = "";
      const id  = (this.productList.length > 0) ? this.productList[0]?.id : 0;
      const idx = (this.productList.length > 0) ? 0 : -1;
      if (callback != null) {
        callback(id,idx);
      }        
      },
    );
  }

  saveProduct(async: csAsync,product :CsProduct, callback :any ) {
    async.inProgress = true;
    async.message = `Saving ${product.title} ...`;    
    var resp: csResp ;
    var url = this.creditsharp_api_url + "/admin/SaveProduct";  

    this.http.post(url,product,  this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control; 
      async.inProgress = false; 
      async.success = true;
      async.message = "";
      if (control.success === true) {
        callback(resp.data as CsProfile);
      }      
      },
    );
  }


  setProductEval(async: csAsync,productId : number, productName: string, evaluationId: number, downloadName: string, callback :any ) {
    async.inProgress = true;
    async.message = `Setting  ${downloadName} as evaluation download for ${productName}...`;    
    var resp: csResp ;
    var request = new  CsSetEvalRequest();
    request.productId = productId;
    request.evaluationId = evaluationId;

    var url = this.creditsharp_api_url + `/admin/SetProductEval`;  

    this.http.post(url, request,  this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;
      var control: csControl = <csControl> resp.control; 
      async.inProgress = false; 
      async.success = true;
      async.message = "";
      if (control.success === true) {
        callback();
      }      
      },
    );
  }





  checkDeleteProduct(async: csAsync, productId: number, callback: any) {
    async.inProgress = true;
    async.message = "Checking product delete...";    
    var resp: csResp ;
    var url = this.creditsharp_api_url + `/admin/CheckDeleteProduct/${productId}`;  

    this.http.get(url,  this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;  
      async.inProgress = false; 
      async.success = true;
      async.message = ""; 
      if (callback != null) {
        callback(resp.data);
      }        
      },
    );
  }

  deleteProduct(async: csAsync, productId: number, title: string, callback: any) {
    async.inProgress = true;
    async.message = `Deleting ${title} ...`;    
    var resp: csResp ;
    var url = this.creditsharp_api_url + `/admin/DeleteProduct/${productId}`;  

    this.http.delete(url,  this.httpOptions).subscribe(data => {           
      var resp: csResp = <csResp> data;  
      async.inProgress = false; 
      async.success = true;
      async.message = ""; 
      if (callback != null) {
        callback(resp.data);
      }        
      },
    );
  }

uploadDownload(async: csAsync, downloadId : number, title: string, productId: number, fileName: string, image : string, callback: any) {
  const request = new CsDownloadWithImage();
  request.id        = downloadId;
  request.productId = productId;
  request.fileName  = fileName;
  request.image     = btoa(image);  
  async.inProgress = true;
  async.message = `Saving ${fileName} to database ...`; 
  var resp: csResp ;
  var url = this.creditsharp_api_url + `/admin/UploadDownload`;  

  this.http.post(url, request, this.httpOptions).subscribe(data => {           
    var resp: csResp = <csResp> data;  
    async.inProgress = false; 
    async.success = true;
    async.message = ""; 
    if (callback != null) {
      callback(resp.data);
    }        
    },
  ); 
}

saveDownload(async: csAsync, download:  CsDownload , callback: any) {
  async.inProgress = true;
  async.message = `Saving ${download.title} ...`;    
  var resp: csResp ;
  var url = this.creditsharp_api_url + `/admin/SaveDownload`;  

  this.http.post(url, download, this.httpOptions).subscribe(data => {           
    var resp: csResp = <csResp> data;  
    async.inProgress = false; 
    async.success = true;
    async.message = ""; 
    if (callback != null) {
      callback(resp.data);
    }        
    },
  );
}

deleteDownload(async: csAsync, downloadId: number, title: string, callback: any) {
  async.inProgress = true;
  async.message = `Deleting ${title} ...`;    
  var resp: csResp ;
  var url = this.creditsharp_api_url + `/admin/DeleteDownload/${downloadId}`;  

  this.http.delete(url,  this.httpOptions).subscribe(data => {           
    var resp: csResp = <csResp> data;  
    async.inProgress = false; 
    async.success = true;
    async.message = ""; 
    if (callback != null) {
      callback(resp.data);
    }        
    },
  );
}

checkDeleteDownload(async: csAsync, downloadId: number, callback: any) {
  async.inProgress = true;
  async.message = "Checking download delete...";    
  var resp: csResp ;
  var url = this.creditsharp_api_url + `/admin/CheckDeleteDownload/${downloadId}`;  

  this.http.get(url,  this.httpOptions).subscribe(data => {           
    var resp: csResp = <csResp> data;  
    async.inProgress = false; 
    async.success = true;
    async.message = ""; 
    if (callback != null) {
      callback(resp.data);
    }        
    },
  );
}



listCustomers(async: csAsync, callback: Function | null) : void {
  async.inProgress = true;
  async.message = "Loading customers...";    
  var resp: csResp ;
  var url = this.creditsharp_api_url + `/admin/ListCustomers`;  

  this.http.get(url,  this.httpOptions).subscribe(data => {           
    var resp: csResp = <csResp> data;
    var control: csControl = <csControl> resp.control;
    this.customerList = <Array<CsCustomer>> resp.data; 
    async.inProgress = false; 
    async.success = true;
    async.message = "";
    const id  = (this.customerList.length > 0) ? this.customerList[0]?.id : 0;
    const idx = (this.customerList.length > 0) ? 0 : -1;
    if (callback != null) {
      callback(id,idx);
    }        
    },
  );
}

saveCustomer(async: csAsync,customer :CsCustomer, callback :any ) {
  async.inProgress = true;
  async.message = `Saving ${ customer.name} ...`;    
  var resp: csResp ;
  var url = this.creditsharp_api_url + "/admin/SaveCustomer";  

  this.http.post(url,customer,  this.httpOptions).subscribe(data => {           
    var resp: csResp = <csResp> data;
    var control: csControl = <csControl> resp.control; 
    async.inProgress = false; 
    async.success = true;
    async.message = "";
    if (control.success === true) {
      callback(resp.data as CsCustomer);
    }      
    },
  );
}




listCustomersToNotify(async: csAsync, productId: number, callback: any) {
  async.inProgress = true;
  async.message = "Listing customers for notification...";    
  var resp: csResp ;
  var url = this.creditsharp_api_url + `/admin/ListCustomersToNotify/${productId}`;  

  this.http.get(url,  this.httpOptions).subscribe(data => {           
    var resp: csResp = <csResp> data;  
    async.inProgress = false; 
    async.success = true;
    async.message = ""; 
    if (callback != null) {
      callback(resp.data);
    }        
    },
  );
}

listUsersThisCustomer(async: csAsync, customerId: number, callback: any) {
  async.inProgress = true;
  async.message = "Listing customers for notification...";    
  var resp: csResp ;
  var url = this.creditsharp_api_url + `/admin/ListUsersThisCustomer/${customerId}`;  

  this.http.get(url,  this.httpOptions).subscribe(data => {           
    var resp: csResp = <csResp> data;  
    async.inProgress = false; 
    async.success = true;
    async.message = ""; 
    if (callback != null) {
      callback(resp.data);
    }        
    },
  );
}

saveUser(async: csAsync,user :CsProfile, customerId : number, callback :any ) {
  async.inProgress = true;
  async.message = `Saving ${ user.name} ...`;    
  var resp: csResp ;
  var url = this.creditsharp_api_url + `/admin/SaveUser/${customerId}`;  

  this.http.post(url,user,  this.httpOptions).subscribe(data => {           
    var resp: csResp = <csResp> data;
    var control: csControl = <csControl> resp.control; 
    async.inProgress = false; 
    async.success = true;
    async.message = "";
    if (control.success === true) {
      callback(resp.data as CsCustomer);
    }      
    },
  );
}

// anyToByteArray(anyData : string) {
//   // let raw       = anyData;
//   // let rawLength = raw.length;
//   let array     = new Uint8Array(anyData.length);
 

//   for (let s of anyData) {
  
//   }
//   for(let i = 0; i < anyData.length; i++) {
//     array.at(i) = anyData.at(i) as Number;
//   }
//   return array;
// }



  
}
