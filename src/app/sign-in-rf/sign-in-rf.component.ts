import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-sign-in-rf',
  templateUrl: './sign-in-rf.component.html',
  styleUrls: ['./sign-in-rf.component.scss']
})
export class SignInRfComponent implements OnInit {
  telArray: string[] = []

  signInForm = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/^[a-z]{6,32}$/i),
        ]),
      ],
      password: '',
      tels: this.fb.array([
          this.fb.control('')
        ])
    });
    // tels: this.fb.array([
    //   this.fb.control('')
    // ])

  get tels(): FormArray {
    return this.signInForm.get('tels') as FormArray;
  }

  addTel() {
    this.tels.push(this.fb.control(''));
  }
  
  removeTel(index: number) {
    this.tels.removeAt(index);
  }

  onBlur(index: number):void {
    console.log(this.telArray.find(item => item === this.tels.at(index).getRawValue()))
    if(!!this.telArray.find(item => item === this.tels.at(index).getRawValue())){
      console.log(this.telArray)
      throw new Error('something went wrong');
    }
    this.telArray.push(this.tels.at(index).getRawValue())

  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.signInForm.value);
  }
}

