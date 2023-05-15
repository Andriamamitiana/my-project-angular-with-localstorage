import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  constructor(private router: Router) { }

  deviceForm = new FormGroup({
    hard: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  });

  device = {};
  devicearr: any[] = [];
  ngOnInit(): void {
    let localdata = localStorage.getItem('stock');
    if (localdata) {
      this.devicearr = JSON.parse(localdata);
    }
    console.log(this.devicearr);
  }

  save() {
    this.device = Object.assign(this.device, this.deviceForm.value);
    this.devicearr.push(this.device);
    localStorage.setItem('stock', JSON.stringify(this.devicearr));
    this.router.navigate(['/list']);
  }

  resetForm() {
    this.deviceForm.reset();
    this.router.navigate(['/list']);
  }

}
