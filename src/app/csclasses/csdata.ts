import { Title } from "@angular/platform-browser";

export class CsDownload {
    id: number = 0;
    version: string = "";
    date: Date = new Date();
    title: string = "";
    description: string = "";
    searchMatchCount: number = 0; 
    fileName : string = "";
    fileSize: number = 0;
    expirationDate : Date = new Date();
    expired: boolean = false;
    licenseKey: string = "";
    extensionLicenseKey : string = "";
    show = false;
}
export class CsDownloadSearch {
    id: number = 0;
    searchKey: string = "";
    dateFrom: string = "";
    dateTo: string = "";
}

export class CsMyDownload {
    id = 0;
    title = "";
    description = "";
    version = "";
    date = new Date();
    productId = 0;
    fileName = "";
    fileSize = 0;
    expirationDate = new Date();
    expired = false;
    licenseKey = "";
    extensionLicenseKey = "";
}

export class CsProduct {    
    id = 0;
    title  = "";
    code = "";
    evaluationId = 0;
    includeInPublicSearch = false;
}

export enum docviewtype {inline, newwindow,download};

export class Cswdocviewitem {   
    
    public constructor(_area: string,_type: docviewtype, _title:string, _target: string, _subject: string) {
        this.area = _area;
        this.title = _title;
        this.type = _type;
        this.target = _target;
        this.subject = _subject;
    }
    public area: string = "";
    public title: string = "";
    public subject: string = "";
    public type: docviewtype = docviewtype.inline;
    public target:string = "";  
}