import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output, OnChanges, ViewChild,TemplateRef, ElementRef, SimpleChanges } from '@angular/core';
import { CsProduct } from 'src/app/csclasses/csdata';
import { csAsync } from 'src/app/csclasses/csglobal';
import { CsWebServiceService } from 'src/app/csservices/cswebservice.service';

@Component({
  selector: 'app-cwsadmin-products-add',
  templateUrl: './cwsadmin-products-add.component.html',
  styleUrls: ['./cwsadmin-products-add.component.css']
})
export class CwsadminProductsAddComponent implements OnChanges {
  constructor(_csWebService: CsWebServiceService) {
    this.csWebService = _csWebService;
  }
  
  csWebService : CsWebServiceService;
  async: csAsync        = new csAsync();
  newProduct : CsProduct = new CsProduct();

  @Input()  show        = false;   
  @Input()  productId   = 0;
  @Output() productCallBack   = new EventEmitter();
  @Output() productIdChange   = new EventEmitter<number>();
  @Output() showChange  = new EventEmitter<boolean>();


  title  = "";
  code = "";
  evaluationId = 0;
  includeInPublicSearch = false;
  
saveNewProduct() {  
  this.newProduct.id = 0;
  this.newProduct.title = this.title;
  this.newProduct.code = this.code;
  this.newProduct.includeInPublicSearch = this.includeInPublicSearch;
  this.csWebService.saveProduct(this.async,this.newProduct, (p : CsProduct) => {
    this.newProduct = p;
    this.productId = p.id;
    this.listProducts();
  });
}

listProducts() : void {
  const isPublic = false;
  this.csWebService.listProducts(this.async, isPublic, () => {
    this.closeModal();
  }); 
}

closeModal() {
  this.show = false;
  this.showChange.emit(this.show);
  this.productCallBack.emit(this.productId);
  //this.productIdChange.emit(this.productId);
  //this.dialog.closeAll();
}

openModal() {
 // const config : MatDialogConfig = new MatDialogConfig();
  //config.hasBackdrop = true;
 // this.dialog.open(this.myModal,config);
} 

ngOnChanges(changes: SimpleChanges) {
  if (this.show === true ) {
   // this.show = false;
    // this.showChange.emit(this.show);
    this.openModal();
  }
}
}
