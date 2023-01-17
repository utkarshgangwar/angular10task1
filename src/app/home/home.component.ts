import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // firstname: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  mobile: string = '';
  gender: any;
  constructor() { }

  ngOnInit(): void {
  }

  title = 'Sign Up';
  disclaimer = 'Rougly Created Form';

  addFormInfo(formValue: NgForm) {
    console.log(formValue.value);
  }

  male = false;
  female = false;
  other = false;

  setState(val) {
   this.gender = val;
  }

  // setStateFemale() {
  //   if (!this.female) {
  //     this.female = !this.female;
  //     this.male = false;
  //     this.other = false;
  //   }
  // }

  // setStateOther() {
  //   if (!this.other) {
  //     this.other = !this.other;
  //     this.female = false;
  //     this.male = false;
  //   }
  // }

}
