import { Component, OnInit } from '@angular/core';
import { CsWebServiceService } from '../csservices/cswebservice.service';
import { csAsync } from '../csclasses/csglobal';

@Component({
  selector: 'app-cswmydownloads',
  templateUrl: './cswmydownloads.component.html',
  styleUrls: ['./cswmydownloads.component.scss']
})
export class CswmydownloadsComponent {
  constructor(_csService : CsWebServiceService) {
    this.csService = _csService;
  }

  csService : CsWebServiceService;
  async: csAsync = new csAsync();

  listDownloads() {
    this.csService.listMyDownloads(this.async);
  }

  formatSize(sizeValue: number) {
    if (sizeValue >= 1000000000) {
      return `${(sizeValue / 1000000000).toFixed(2)}GB`;
    }
    if (sizeValue >= 1000000) {
      return `${(sizeValue / 1000000).toFixed(2)}MB`;
    }
    if (sizeValue > 1000) {
      return `${(sizeValue / 1000).toFixed(2)}KB`;
    }
    return `${sizeValue.toFixed(2)}Bytes`;
  }

  ngOnInit() {
    this.listDownloads();
  }
}
