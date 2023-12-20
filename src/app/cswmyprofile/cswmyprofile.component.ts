import { Component, OnInit } from '@angular/core';
import { CsWebServiceService } from '../csservices/cswebservice.service';
import { csAsync } from '../csclasses/csglobal';

@Component({
  selector: 'app-cswmyprofile',
  templateUrl: './cswmyprofile.component.html',
  styleUrls: ['./cswmyprofile.component.scss']
})
export class CswmyprofileComponent implements OnInit {
  constructor(_csService : CsWebServiceService) {
    this.csService = _csService;
  }

  csService : CsWebServiceService;
  async: csAsync = new csAsync();

  userId          = "";
  name            = "";
  password        = "";
  phone           = "";
  phoneExtension  = "";
  fax             = "";
  email           = "";
  notifyOnUpdates = false
  showPassword    = false;


  initValues() {
    this.userId           = this.csService.myProfile.userId;
    this.name             = this.csService.myProfile.name;
    this.password         = this.csService.myProfile.password;
    this.phone            = this.csService.myProfile.phone;
    this.fax              = this.csService.myProfile.fax;
    this.email            = this.csService.myProfile.email;
    this.phoneExtension   = this.csService.myProfile.phoneExtension;
    this.notifyOnUpdates  = this.csService.myProfile.notifyOnUpdate;
  }

  applyValues() {
    this.csService.myProfile.userId           = this.userId;
    this.csService.myProfile.name             = this.name;
    this.csService.myProfile.password         = this.password;
    this.csService.myProfile.phone            = this.phone;
    this.csService.myProfile.fax              = this.fax;
    this.csService.myProfile.email            = this.email;
    this.csService.myProfile.phoneExtension   = this.phoneExtension;
    this.csService.myProfile.notifyOnUpdate   = this.notifyOnUpdates;
    this.csService.updateProfile(this.async);
  }

  togglePasswordView() {
    this.showPassword = !this.showPassword;
  }

  getPasswordType() {
    return (this.showPassword === true) ? "text" : "password";
  }

  getMyProfile() {
    this.csService.loadProfile(this.async, () => {
      this.initValues();
    });
  }

  ngOnInit() {
    this.getMyProfile();
  }
}
