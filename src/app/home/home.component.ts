import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { }

  deviceForm = new FormGroup({
    hard: new FormControl(''),
    nom: new FormControl(''),
    type: new FormControl(''),
    date: new FormControl('')
  });

  home: any = {};
  onSubmit() {
   // console.log(this.deviceForm.value);  ilaina https://www.learmoreseekmore.com/2022/06/angular14-reactive-forms-example.html
    this.home = Object.assign(this.home, this.deviceForm.value);
    this.addDevice(this.home);
  }

  addDevice(home:any) {
    let devices = [];
    if (localStorage.getItem('Device')) {
      let conv: any = localStorage.getItem('Device');
      devices = JSON.parse(conv);
      devices = [home, ...devices];
      localStorage.setItem('Device', JSON.stringify(home));
    } else { 
      devices = [home]; 
      
    }
    
  }
}

