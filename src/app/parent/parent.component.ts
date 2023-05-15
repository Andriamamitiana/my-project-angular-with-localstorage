import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  sendData = 45;
  items = ['un','deux','trois','quatre'];

  AddList(newItem: string) {
    this.items.push(newItem);
  }
  

}
