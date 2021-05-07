import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ColorSampleComponent} from './color-sample/color-sample.component';
import {ColorPickerDirective} from 'ngx-color-picker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {


  constructor() {
  }
  @ViewChild(ColorSampleComponent) colorSampleComponent: ColorSampleComponent;

  title = 'angular-component-testing';

  @ViewChild('primaryInput', {read: ColorPickerDirective})
  colorPicker: ColorPickerDirective;

  changeTitle(newTitle): void {
    this.title = newTitle;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.colorSampleComponent);
  }

  openColorPicker(): void {
    this.colorPicker.openDialog();
  }


}
