import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { ContentComponent } from './content/content.component';
import { StepperComponent } from './stepper/stepper.component';
import { WizardComponent } from './wizard-component.component';

@NgModule({
  declarations: [ 
    ButtonsComponent,
    ContentComponent,
    StepperComponent,
    WizardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [WizardComponent]
})
export class WizardModule { }
