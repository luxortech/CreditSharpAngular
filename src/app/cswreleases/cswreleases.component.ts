import { Component, OnInit } from '@angular/core';
import { CsWebServiceService } from '../csservices/cswebservice.service';
import { Csfilter,  filterType } from '../csclasses/csfilter';
import { csAsync } from '../csclasses/csglobal';
import { CsDownloadSearch } from '../csclasses/csdata';

@Component({
  selector: 'app-csw-releases',
  templateUrl: './cswreleases.component.html',
  styleUrls: ['./cswreleases.component.scss']
})
export class CswReleasesComponent implements OnInit {

  constructor(_csWebService : CsWebServiceService) { this.csWebService = _csWebService}
  csWebService: CsWebServiceService;
  async: csAsync = new csAsync();
  masterFilterList : Array<Csfilter> = new Array<Csfilter>();
  selectedFilterList  : Array<Csfilter> = new Array<Csfilter>();
  searchDownloadRequest : CsDownloadSearch = new CsDownloadSearch();

  productId = 0;

  ngOnInit(): void {
    this.masterFilterList = this.initMasterFilterList();
    this.selectedFilterList = new Array<Csfilter>();
    
    this.listProducts();
  }

  initMasterFilterList() : Array<Csfilter> {
    var list : Array<Csfilter> = new Array<Csfilter>();
    list.push({title: "Release Date",type: filterType.dateRange, value1: new Date(), value2: new Date(), selected: false});
    list.push({title: "Search Keys",type: filterType.string, value1: "", value2: null, selected: false});
    return list;
  }

  applySearch() : void {
    this.searchDownloadRequest            = new CsDownloadSearch();
    this.searchDownloadRequest.id         = this.productId;
    this.searchDownloadRequest.searchKey  = (this.selectedFilterList.find(f=> f.title === "Search Keys") ?? new Csfilter()).value1 ?? "";
    this.searchDownloadRequest.dateFrom   = (this.selectedFilterList.find(f=> f.title === "Release Date") ?? new Csfilter()).value1 ?? "";
    this.searchDownloadRequest.dateTo     = (this.selectedFilterList.find(f=> f.title === "Release Date") ?? new Csfilter()).value2 ?? "";
    this.searchDownload();
  }

  searchDownload() : void {
    this.csWebService.searchDownloads(this.async,this.searchDownloadRequest);  
  }

  listProducts() : void {
    this.csWebService.listProducts(this.async, (id: number) => {
    this.productId                = id;
    this.searchDownloadRequest    = new CsDownloadSearch();
    this.searchDownloadRequest.id = this.productId;
    this.searchDownload();      
    }); 
  } 
}