import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  usernamePattern = /^[a-z]{6,32}$/i;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    console.log(form);
    // throw new Error('something went wrong');
  }
}

