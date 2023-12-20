import { Component , EventEmitter, Input, Output, OnChanges,SimpleChanges} from '@angular/core';
import { csAsync } from 'src/app/csclasses/csglobal';
import { CsWebServiceService } from 'src/app/csservices/cswebservice.service';


@Component({
  selector: 'app-cswadmin-upload',
  templateUrl: './cswadmin-upload.component.html',
  styleUrls: ['./cswadmin-upload.component.css']
})
export class CswadminUploadComponent implements OnChanges {
  constructor(_csWebService : CsWebServiceService) {
    this.csWebService = _csWebService;
  }

csWebService        : CsWebServiceService;

@Input()  productId       = 0;
@Input()  downloadTitle   = "";
@Input()  productTitle    = "";
@Input()  downloadId      = 0; 
@Input()  show            = false;
@Output() showChange      = new EventEmitter<boolean>();  
@Output() callback        = new EventEmitter();

async                   = new csAsync();

uploadTitle           = "";
uploadFileName        = "";
selectedFileName      = ""; 
fileSelected          = false;


selectedFile = {
  name: "",
  lastModifiedDate: "",
  size: 0
}

fileToUpload: File | null = null;
reader                = new FileReader();


onFileSelected(event : any) {

  const file:File = event.target.files[0];

  if (file) {

      this.selectedFileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

     // const upload$ = this.http.post("/api/thumbnail-upload", formData);

     // upload$.subscribe();
  }
}

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
}

uploadFileSelected(event : any) {
  const target = event.target;
  const files = target.files;
  this.selectedFile.lastModifiedDate  = files[0].lastModifiedDate;
  this.selectedFile.name              = files[0].name;
  this.selectedFile.size              = files[0].size;    
  this.fileSelected = true;
}

uploadMe() {
  
        const fileDom : any = document.getElementById("uploadFile") as HTMLElement;
        const file = fileDom.files[0];
        const ft = file.type;
        const fs = file.size;
        const fn = file.name; 
        this.uploadFileName = fn;
        this.async.message = `Reading ${fn} ...`; 
        this.async.inProgress = true;
        this.async.success = true;
        this.reader = new FileReader();
        this.reader.onload = ()=> {
          this.uploadMeCallBack(file)
        };
        // this.reader.readAsArrayBuffer(file);
        this.reader.readAsBinaryString(file);
}

uploadMeCallBack(file: string) {
  // let uintArray = new Uint8Array(this.reader.result as ArrayBuffer);
  this.csWebService.uploadDownload(this.async,this.downloadId,this.downloadTitle,this.productId, this.selectedFile.name, this.reader.result as string,() => {
    this.callback.emit(this.selectedFile.name);
    this.closeModal();
  })
}


closeModal() {
  this.show = false;
  this.showChange.emit(this.show);
}

ngOnInit(): void {
    
}



ngOnChanges(changes: SimpleChanges) {
  if (this.show === true ) {
    this.fileSelected = false;
    this.uploadTitle = `Upload ${this.downloadTitle} to ${this.productTitle}`;
  }
}
}
