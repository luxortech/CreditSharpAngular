import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-csconfirm',
  templateUrl: './csconfirm.component.html',
  styleUrls: ['./csconfirm.component.css']
})
export class CsconfirmComponent {

  @Input()  show        = false;  
  @Input()  message     = "";
  @Input()  title       = "";
  @Output() callBack    = new EventEmitter();
  @Output() showChange  = new EventEmitter<boolean>();

  closeModal() {
    this.show = false;
    this.showChange.emit(this.show);
  }

  noSelected() {
    this.closeModal();
  }

  yesSelected() {
    this.callBack.emit();
    this.closeModal();
  }
}