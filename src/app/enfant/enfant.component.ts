import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {

  @Input() age: number;
  @Output() newAddEvent = new EventEmitter<string>();

  addNewList (value: string) {
    this.newAddEvent.emit(value);
  }

}
