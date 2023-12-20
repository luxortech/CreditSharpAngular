import { Component, OnInit , Input} from '@angular/core';
import { CsDownload, CsProduct } from 'src/app/csclasses/csdata';
import { csAsync } from 'src/app/csclasses/csglobal';
import { CsWebServiceService } from 'src/app/csservices/cswebservice.service';

@Component({
  selector: 'app-cswadmin-products',
  templateUrl: './cswadmin-products.component.html',
  styleUrls: ['./cswadmin-products.component.css']
})
export class CswadminProductsComponent implements OnInit {
  constructor(_csWebService : CsWebServiceService) { this.csWebService = _csWebService}
  csWebService          : CsWebServiceService;

  @Input()              async: csAsync = new csAsync(); 

  showAdd               = false;
  showUpload            = false;
  showNotifications     = false;
  
  uploadDownloadTitle   = "";
  uploadProductTitle    = "";

  productId             = 0;
  title                 = "";
  code                  = "";
  evaluationId          = 0;
  includeInPublicSearch = false;
  deleteProductName     = "";
  saveProductName       = "";
  confirmDeleteMessage  = "";
  confirmDownloadDeleteMessage = "";
  notificationTooltip   = "Maintain notification templates, generate download notifications.";


  isEval                = false;
  showDelete            = false;
  showDownloadDelete    = false;
  showDownloadDescription = false;
  downloads             = new Array<CsDownload>();
  download              = new CsDownload();

  onShowNotifications() {
    this.showNotifications  = true;
  }

  toggleDownloadDescription() {
    this.showDownloadDescription = !this.showDownloadDescription;
  }

  showHideReleaseNotesMessage() {
    return (this.showDownloadDescription === true) ? "Hide Notes" : "Show Notes";
  }

  showHideReleaseNotesActive() {
    return (this.showDownloadDescription === true) ? "active" : "";
  }

  showNotificationsActive() {
    return (this.showNotifications === true) ? "active" : "";
  }

  showUploadActive() {
    return (this.showUpload === true) ? "active" : "";
  }

  showUploadModal() {
    this.uploadDownloadTitle  = this.download.fileName;
    this.uploadProductTitle   = this.title;
    this. showUpload = true;
  }
  uploadCallback(event: any) {
    this.download.fileName = event;
    this.listDownloadsThisProduct();
  }

  onAddDownloadClicked() {
    this.download = new CsDownload(); 
    this.download.productId = this.productId;
    this.csWebService.saveDownload(this.async,this.download, () => {
      this.listDownloadsThisProduct();
    })
  }

  onSaveDownloadClick() {
    this.csWebService.saveDownload(this.async,this.download, () => {
      this.listDownloadsThisProduct();
    })
  }

  onDeleteClick() {
    this.csWebService.checkDeleteProduct(this.async,this.productId, (msg: string) => {
      this.deleteCheckCallback(msg);
    })
  }

  deleteCheckCallback(message : string) {
    this.confirmDeleteMessage = `${message}<br/> Do you really want to delete ${this.title}?`;
    this.showDelete = true;
  }

  deleteProduct() {
    this.csWebService.deleteProduct(this.async, this.productId, this.title, () => {
      this.deleteProductCallback();
    })  
  }

  deleteProductCallback() {
    this.listProducts(0);
  }

  onDeleteDownloadClicked() {
    this.csWebService.checkDeleteDownload(this.async, this.download.id, (msg: string) => {
      this.deleteDownloadCheckCallback(msg);
    })
  }

  deleteDownloadCheckCallback(message : string) {
    this.confirmDownloadDeleteMessage = `${message}<br/> Do you really want to delete ${this.download.fileName}?`;
    this.showDownloadDelete = true;
  }

  deleteDownload() {
    this.csWebService.deleteDownload(this.async, this.download.id, this.download.title,() => {
      this.listDownloadsThisProduct();
    })
  }   

  listProducts(productId: number) : void {
    const isPublic = false;
    this.csWebService.listProducts(this.async, isPublic, (id: number, idx: number) => {
      if (productId > 0) {
        this.productSelected(productId)
      } else {
        this.getProduct(idx);
      }
      
    }); 
  }

  showAddNew() {
    this.showAdd = true;
  }

  setButtonTitles(title: string) {
    this.deleteProductName      = `Delete ${title}`;
    this.saveProductName         = `Save ${title}`;
  }

  getProduct(idx : number) {
    this.productId              = this.csWebService.productList.at(idx)?.id as number;
    this.title                  = this.csWebService.productList.at(idx)?.title as string;
    this.code                   = this.csWebService.productList.at(idx)?.code as string;
    this.evaluationId           = this.csWebService.productList.at(idx)?.evaluationId as number;
    this.includeInPublicSearch  = this.csWebService.productList.at(idx)?.includeInPublicSearch as boolean;
    this.setButtonTitles(this.title);
    this.listDownloadsThisProduct();
  }

  listDownloadsThisProduct() {
    this.csWebService.listDownloadsThisProduct(this.async, this.productId,this.title, (downloads: Array<CsDownload>) => {
      this.listDownloadsThisProductCallback(downloads);
    })
  }

  listDownloadsThisProductCallback(downloads: Array<CsDownload>) {
    this.downloads = downloads;
    this.download = (this.downloads.length > 0) ? this.downloads.at(0) as CsDownload : new CsDownload() as CsDownload;
  }

  getDownloadSelected(id : number) {
    return (id === this.download.id) ? 'active' : '';
  }

  setDownloadSelected(download: CsDownload) {
    this.download = download;
  }
 
  productSelected(selectedId : any) {
    let idx = this.csWebService.productList.findIndex(p => p.id === selectedId);
    idx = (idx === -1) ? 0 : idx;
    this.getProduct(idx);
  }

  productNameChanged(title: string) {
    this.setButtonTitles(title);
  }

  setProductEval() {
    this.csWebService.setProductEval(this.async,this.productId, this.title, this.download.id, this.download.title, () => {
      this.productSelected(this.productId);
      this.evaluationId = this.download.id;
    })
  }

  unSetProductEval() {
    this.csWebService.setProductEval(this.async,this.productId, this.title, 0, this.download.title, () => {      
      this.productSelected(this.productId);
      this.evaluationId = 0;
    })
  }

  saveProduct() {
    const savedProduct = new CsProduct();
    savedProduct.id = this.productId;
    savedProduct.title = this.title;
    savedProduct.code= this.code;
    savedProduct.evaluationId = this.evaluationId;
    savedProduct.includeInPublicSearch = this.includeInPublicSearch;

      this.csWebService.saveProduct(this.async,savedProduct, (product: CsProduct) => {
      this.listProducts(product.id);
     })
  }

   

  ngOnInit() {
    this.listProducts(0);
  }
}
