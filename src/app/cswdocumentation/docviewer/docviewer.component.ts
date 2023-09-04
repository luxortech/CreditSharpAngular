import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Cswdocviewitem} from 'src/app/csclasses/csdata';
import { MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.scss']
})
export class DocviewerComponent implements OnInit {
  @Input() docList: Array<Cswdocviewitem> = new Array<Cswdocviewitem>;
  @Input() docUrl: Object = {}; 
  @Input() showHide: boolean = false;
  @Output() docUrlChange  = new EventEmitter();
  @Output() showHideChange = new EventEmitter();

  constructor() { }
  doDoc(entry: Cswdocviewitem)
  {
    this.docUrl = entry;
    this.showHide = false;
    this.docUrlChange.emit(this.docUrl);
    this.showHideChange.emit(this.showHide);
   /* var x = JSON.stringify(this.docUrl);
    alert(x); */
  }
  ngOnInit(): void {
    /* this.docUrl = {target: ""}; */
    //alert(this.docList.length);
  }

}
