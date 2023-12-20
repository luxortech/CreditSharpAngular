import { Component, Input } from '@angular/core';
import { csAsync } from 'src/app/csclasses/csglobal';

@Component({
  selector: 'app-csasync',
  templateUrl: './csasync.component.html',
  styleUrls: ['./csasync.component.css']
})
export class CsasyncComponent {
@Input() async : csAsync = new csAsync();

}
