import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-color-sample',
  templateUrl: './color-sample.component.html',
  styleUrls: ['./color-sample.component.css']
})
export class ColorSampleComponent implements OnInit {

  constructor() {
  }
  @Input() color;

  @Input() message: string;

  @Output() changeTitleEvent: EventEmitter<string> = new EventEmitter();

  @ViewChild('titleField') titleField: ElementRef;

  ngOnInit(): void {
  }

  handleButtonClick(newTitle): void {
    if (newTitle) {
      this.changeTitleEvent.emit(newTitle);
      this.titleField.nativeElement.value = '';
    }
  }

}
