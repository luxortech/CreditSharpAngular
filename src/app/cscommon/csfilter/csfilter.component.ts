// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core'; 
// import { FormsModule } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { csControl } from 'src/app/csclasses/csglobal';
import {Csfilter, filterType} from 'src/app/csclasses/csfilter';



import { EMPTY, empty } from 'rxjs';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

import { animate } from '@angular/animations';

@Component({
  selector: 'app-csfilter',
  templateUrl: './csfilter.component.html',
  styleUrls: ['./csfilter.component.scss']
})
export class CsfilterComponent implements OnInit {
  public get filterType(): typeof filterType {
    return filterType; 
  }
  constructor() { }
  
  @Input()  masterFilterList          : Array<Csfilter> = new Array<Csfilter>();
  @Input()  selectedFilterList        : Array<Csfilter> = new Array<Csfilter>();
  @Output() selectedFilterListChange  = new EventEmitter<Array<Csfilter>>();
  workFilterList                      : Array<Csfilter>    = new Array<Csfilter>();

  serializedDate = new FormControl(new Date().toISOString());



  showML : boolean = false;
  filter : Csfilter = new Csfilter();
  filterBeingEdited = new Csfilter();
  filterBeingEditedValues : any = {"value1":{},"value2":{} }
  showMasterFilterSelectList : boolean = false;
  FilterEditMode : boolean = false;
  workInputValue1: any;
  workInputValue2: any;
  maxDate : Date = new Date();
  minDate =  this.maxDate.setDate(this.maxDate.getDate())-360;
  
  ngAlert(msg: string) {
    alert(msg);
  }


  masterListNotEmpty() : boolean {
    var listNotEmpty = false;
    this.masterFilterList.forEach( f => {
      if (this.filterNotSelected(f)) {
        listNotEmpty = true;
      } 
    }) 
    return listNotEmpty;
  }

  masterListIsEmpty() : boolean {
    var listEmpty = true;
    this.masterFilterList.forEach( f => {
      if (this.filterIsSelected(f)) {
        listEmpty = false;
      } 
    }) 
    return listEmpty;
  }


  onDateChange(event: any, filterBeingEditedValues : any = {"value1":{},"value2":{} }, fieldId: number) : any { 
    var dte : Date = this.adjustedDateTimeZone(event.target.valueAsDate);
    switch (fieldId) {
      case 1: {
        filterBeingEditedValues.value1 = dte;
        break;
      }
      case 2: {
        filterBeingEditedValues.value2 = dte;
        break;
      }
    } 
  }


  editSelectedFilter(filter: Csfilter) {
    this.filterBeingEdited = filter;
    this.FilterEditMode = true;
  }


  showAddFilter() : void {
    this.showMasterFilterSelectList = true;
  }


  hideAddFilter() : void {
    this.showMasterFilterSelectList = false;
  }

  deepCopy(inData: any) {
    return JSON.parse(JSON.stringify(inData));
  }


  adjustedDateTimeZone(inDate : Date) : Date { 
    const localDate = new Date();
    let newDate = new Date(inDate.getTime() + inDate.getTimezoneOffset() * 60 * 1000);
    const offset = inDate.getTimezoneOffset() / 60;
    const hours = inDate.getHours();
    newDate.setHours(hours - offset);
    return newDate;
  }
  

  showFilterEditor(filter: Csfilter) { 
   this.filterBeingEdited =  this.deepCopy(filter);
    switch (this.filterBeingEdited.type) {
      case filterType.date : {
        if ((this.filterBeingEdited.value1) && (this.filterBeingEdited.value1 instanceof Date)) {
          this.filterBeingEditedValues.value1 = this.adjustedDateTimeZone(this.filterBeingEdited.value1); 
        }  else {
          this.filterBeingEditedValues.value1 =  this.adjustedDateTimeZone(new Date());
        }
        break;
      }
      case filterType.dateRange : {
        if ((this.filterBeingEdited.value1) && (this.filterBeingEdited.value1 instanceof Date)) {
          this.filterBeingEditedValues.value1 = this.adjustedDateTimeZone(this.filterBeingEdited.value1); 
        }  else {
          this.filterBeingEditedValues.value1 =  this.adjustedDateTimeZone(new Date());
        }
        if ((this.filterBeingEdited.value2) && (this.filterBeingEdited.value2 instanceof Date)) {
          this.filterBeingEditedValues.value2 = this.adjustedDateTimeZone(this.filterBeingEdited.value2);
        }  else {
          this.filterBeingEditedValues.value2 =  this.adjustedDateTimeZone(new Date());
        }
        break;
      }
      default : {
        this.filterBeingEditedValues.value1 = this.filterBeingEdited.value1;
        break;
      }
    }     
    this.FilterEditMode = true
    this.hideAddFilter();
  }

  dateToString(inDate : Date) {
    return `${inDate.getMonth()+1}/${inDate.getDate()}/${inDate.getFullYear()}`;
  }


  saveFilterBeingEdited(filterBeingEdited:Csfilter, filterBeingEditedValues : any = {"value1":{},"value2":{} }) { 
    const field1 = (filterBeingEditedValues.value1 instanceof Date) ? this.dateToString(filterBeingEditedValues.value1):  filterBeingEditedValues.value1.toString();
    const field2 = (filterBeingEditedValues.value2 instanceof Date) ? this.dateToString(filterBeingEditedValues.value2) : filterBeingEditedValues.value2.toString();

    const index = this.selectedFilterList.findIndex(f=> f.title == filterBeingEdited.title);
    if (index >= 0) {
      this.selectedFilterList[index].value1 = field1;
      this.selectedFilterList[index].value2 = field2;
      this.selectedFilterList[index].selected = true;
    } else {
      filterBeingEdited.value1 = field1;
      filterBeingEdited.value2 = field2;
      filterBeingEdited.selected = true;
      this.selectedFilterList.push(filterBeingEdited);      
    }    
    this.FilterEditMode = false;
    this.selectedFilterListChange.emit(this.selectedFilterList);
  }


  removeFromSelected(filter: Csfilter) {
    var idx = this.selectedFilterList.findIndex(f=> f.title == filter.title)
    this.selectedFilterList.splice(idx,1);
    idx = this.masterFilterList.findIndex(f=> f.title == filter.title);
    this.masterFilterList[idx].selected = false;
  }


  filterNotSelected(filter: Csfilter) {
    var idx = this.selectedFilterList.findIndex(f=> f.title === filter.title);
    return (idx < 0);
  }

  filterIsSelected(filter: Csfilter) {
    var idx = this.selectedFilterList.findIndex(f=> f.title === filter.title);
    return (idx > -1);
  }


  cancelEdit(filter:Csfilter) { 
    this.FilterEditMode = false;
  }


  ngOnInit(): void {
    this.workFilterList = new Array<Csfilter>();
    //this.selectedFilterList = new Array<Csfilter>();
  }
}