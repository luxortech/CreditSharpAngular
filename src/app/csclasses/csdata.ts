import { Title } from "@angular/platform-browser";

export class CsDownload {
    id: number = 0;
    productId: number = 0;
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
    licenseKeyExpiration: string = "";
    show = false;
    isEval = false;
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

export class CsDownloadWithImage extends CsMyDownload
{
    image : any = [];
}

export class CsProduct {    
    id = 0;
    title  = "";
    code = "";
    evaluationId = 0;
    includeInPublicSearch = false;
}

export class CsCustomer {
    id = 0;
    name = "";
    address = "";
    city = "";
    state = "";
    zip = "";
    contactName = "";
    contactEmail = "";
    contactPhone = "";
    contactFax = "";
    updateNotificationEmail = "";
    updateNotifications = false;
    users = new Array<CsProfile>();
    products = new Array<CsProduct>();
}

export class CsProfile {
    id              = 0;
    userId          = "";
    password        = "";
    showPassword    = false;
    name            = "";
    phone           = "";
    phoneExtension  = "";
    fax             = "";
    email           = "";
    notifyOnUpdate  = false;
}

export class CsNotificationProfile extends CsProfile {
    customerName    = "";
    notifyMe        = false;
}

export class CsSetEvalRequest {
    productId       = 0; 
    evaluationId    = 0; 
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