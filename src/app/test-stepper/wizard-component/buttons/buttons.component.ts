import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Output() private step = new EventEmitter();

  public next(): void {
    this.step.emit(1);
  }

  public back(): void {
    this.step.emit(-1);
  }

}
