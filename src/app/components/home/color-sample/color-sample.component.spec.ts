import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorSampleComponent} from './color-sample.component';
import {DebugElement, ElementRef} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('ColorSampleComponent', () => {
  let component: ColorSampleComponent;
  let fixture: ComponentFixture<ColorSampleComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorSampleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSampleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly render for the passed input value ', () => {
    const msg = 'Enter a new title';
    component.message = msg;
    fixture.detectChanges();
    const element = debugElement.query(By.css('p'));
    expect(element.nativeElement.textContent).toBe(msg);
  });
  fit('should correctly output text in the component ', () => {
    spyOn(component.changeTitleEvent, 'emit');
    console.log(debugElement.queryAll(By.css('button')));
    const buttonElement = debugElement.queryAll(By.css('button'))[0];
    getInputs()[0].nativeElement.value = 'new title';
    click(buttonElement);
    expect(component.changeTitleEvent.emit).toHaveBeenCalledWith('new title');
  });

  function getInputs(): DebugElement[] {
    return debugElement.queryAll(By.css('input[type=text]'));
  }

  function click(element): void {
    const el: HTMLElement = element.nativeElement;
    el.click();
    // fixture.detectChanges();
  }
});


