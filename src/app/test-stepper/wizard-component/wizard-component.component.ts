import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-wizard-component',
  templateUrl: './wizard-component.component.html',
  styleUrls: ['./wizard-component.component.scss']
})
export class WizardComponent {
  public currentStep: number = 1;
  public numbers = [1, 2, 3];

  public step(event: number): void {
    this.currentStep = event;
  }

  public changeStep(event: number): void {
    if (event < 0 && this.currentStep > 1) {
      this.currentStep = this.currentStep + event;
    }

    if (event > 0 && this.currentStep < this.numbers.length) {
      this.currentStep = this.currentStep + event;
    }
  }

}
