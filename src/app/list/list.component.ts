import { Component, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  devicearr: any[] = [];

  constructor() { }

  ngOnInit(): void {
    let localdata = localStorage.getItem('stock');
    if (localdata) {
      this.devicearr = JSON.parse(localdata);
    }
    console.log(this.devicearr);
  }

  displayedColumns: string[] = ['Hardwareld', 'Name', 'Types', 'CreateDate'];




  selectedItemIdx= null;
  state: boolean = true;

  rowSelected(selectedItemIdx) {
    this.selectedItemIdx = selectedItemIdx;
    console.log(selectedItemIdx);

    if (this.rowSelected) {
      this.state = false;
    }
  }
  deleteSelected() { 
   // let indice = this.devicearr.indexOf(this.devicearr[this.selectedItemIdx]);
    let indice = this.selectedItemIdx;
    if (indice>-1) {
      this.devicearr.splice(indice, 1);
      // jerena tsara
      this.devicearr = [...this.devicearr];
      localStorage.setItem('stock', JSON.stringify(this.devicearr));
    }
    this.state = true;
    console.log(indice);
  }
  
}

