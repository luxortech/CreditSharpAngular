import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
 import{ FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
// import { NglModule } from 'ng-lightning';

import { CswMainComponent } from './cswmain/cswmain.component';
import { CswHomeComponent } from './cswhome/cswhome.component';
import { CswDocumentationComponent } from './cswdocumentation/cswdocumentation.component';
import { CswReleasesComponent } from './cswreleases/cswreleases.component';
import { CswPricingComponent } from './cswpricing/cswpricing.component';
import { CswAboutComponent } from './cswabout/cswabout.component';
import { CswLoginComponent } from './cswlogin/cswlogin.component';
import { CswAdministrationComponent } from './cswadministration/cswadministration.component';
import { CswNavComponent } from './cswnav/cswnav.component';
import { CsWebServiceService } from './csservices/cswebservice.service'; 


import { TestComponent } from './test.component'; 

import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; 
import { MatCardModule} from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatDateFormats, MAT_DATE_FORMATS , MAT_DATE_LOCALE, NativeDateAdapter, DateAdapter} from '@angular/material/core'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';

 
import { CswfeatureComponent } from './cswfeature/cswfeature.component';
import { CswevalComponent } from './csweval/csweval.component';
import { CswheroComponent } from './cswhero/cswhero.component';
import { DocviewerComponent } from './cswdocumentation/docviewer/docviewer.component';
import { DocumentsComponent } from './cswdocumentation/documents/documents.component';
import { SchemasComponent } from './cswdocumentation/schemas/schemas.component';
import { ScriptsComponent } from './cswdocumentation/scripts/scripts.component';
import { RecipiesComponent } from './cswdocumentation/recipies/recipies.component';
import { ProjectsComponent } from './cswdocumentation/projects/projects.component';
import { CsfilterComponent } from './cscommon/csfilter/csfilter.component'
import { CswmydownloadsComponent } from './cswmydownloads/cswmydownloads.component';
import { CswmyprofileComponent } from './cswmyprofile/cswmyprofile.component';
import { DATE_PIPE_DEFAULT_OPTIONS, DatePipe } from '@angular/common'; 

// import {
//   NgxMatDatetimePickerModule,
//   NgxMatNativeDateModule,
//   NgxMatTimepickerModule
// } from '@angular-material-components/datetime-picker';

@NgModule({
  declarations: [ 
    AppComponent,
    CswMainComponent,
    CswHomeComponent,
    CswNavComponent,
    CswDocumentationComponent,
    CswReleasesComponent,
    CswPricingComponent,
    CswAboutComponent,
    CswLoginComponent,
    CswAdministrationComponent,
    TestComponent,
    CswfeatureComponent,
    CswevalComponent,
    CswheroComponent,
    DocviewerComponent,
    DocumentsComponent,
    SchemasComponent,
    ScriptsComponent,
    RecipiesComponent,
    ProjectsComponent,
    CsfilterComponent, 
    CswmydownloadsComponent,
    CswmyprofileComponent        
  ],
  imports: [
   // NglModule,
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatListModule,     
    MatButtonModule,   
    MatIconModule,
    MatDividerModule,  
    MatTabsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatFormFieldModule,  
    MatCardModule,
    BrowserAnimationsModule,  
    FormsModule,    
    ReactiveFormsModule,
    MatRippleModule, 
    MatDatepickerModule,
    MatNativeDateModule, 
    MatInputModule,
    DatePipe,    
    // NgxMatDatetimePickerModule,
    // NgxMatTimepickerModule,
    // NgxMatNativeDateModule,
    RouterModule.forRoot([
      { path: 'documentation', component: CswDocumentationComponent },
      { path: 'releases', component: CswReleasesComponent },
      { path: 'pricing', component: CswPricingComponent },
      { path: 'about', component: CswAboutComponent },
      { path: 'login', component: CswLoginComponent },
      { path: 'administration', component: CswAdministrationComponent },
      { path: 'home', component: CswHomeComponent }, 
      { path: 'mydownloads', component: CswmydownloadsComponent }, 
      { path: 'myprofile', component: CswmyprofileComponent },    
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ]), 
  ],  
  providers: [
    CsWebServiceService,
    {provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMATS},
    {provide: MAT_DATE_LOCALE, useValue: MAT_DATE_LOCALE},
    {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'shortDate'}}
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
