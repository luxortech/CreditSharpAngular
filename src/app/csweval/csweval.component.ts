import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-csweval',
  templateUrl: './csweval.component.html',
  styleUrls: ['./csweval.component.scss']
})
export class CswevalComponent implements OnInit {
  showDownload = false;
  showLicenseInfo = false;
  showLicenseKey = false;
  hideDownloadButton = false;
  evalRequestSent = false;
  evalRequestErrorText = "";
  licenseKey = ""
  evalEmail = "";
  evalName = "";
  evalCompany = "";
  
  licenseInfo = "";
  evalCode = "";
  constructor() { }
  downloadEval(evalCode: string) {

  }
  clickHere () {
    this.showDownload = !this.showDownload; 
  }

  sendEvalRequest () {
    this.showDownload = false;
  }


  ngOnInit(): void {
    this.evalRequestErrorText = "";
    this.evalEmail = "";
    this.evalCompany = "";
    this.evalName = "";
    this.licenseKey = ""
    this.showLicenseInfo = false;
    this.showLicenseKey = false;
    this. hideDownloadButton = false;
    this.showDownload = false;
    this.evalRequestSent = false;
  }

}
