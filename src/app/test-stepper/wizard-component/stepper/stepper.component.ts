import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Stepper from 'bs-stepper';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Output() private currentStep = new EventEmitter();
  @Output() private stepperData = new EventEmitter();

  private stepper!: Stepper;
  @Input()
  public numbers = [1, 2, 3];
  @Input()
  public selectedStep = 1;

  public ngOnInit(): void {
    this.stepper = new Stepper(document.querySelector('#stepper')!, {
      linear: false,
      animation: true
    });
    this.stepperData.emit(this.stepper);
  }

  public step(number: number) {
    this.currentStep.emit(number);
    this.selectedStep = number;
  }
}
