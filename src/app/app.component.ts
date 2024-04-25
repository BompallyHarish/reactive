import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'reactive';
  constructor(private fb: FormBuilder) { }

  submitted:boolean = false
  registartionForm = this.fb.group({
    userName: ["", [Validators.required]],
    Password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    address: this.fb.group({
      city: [""],
      state: [""],
      postalCode: [""]
    })
  })

  ngOnInit(): void {
    this.submitted= false
    this.registartionForm = this.fb.group({
      userName: ["", [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      address: this.fb.group({
        city: [""],
        state: [""],
        postalCode: [""]
      })
    })
  }
 
  get userName() {
    return this.registartionForm.get('userName')
  }
  get password() {
    return this.registartionForm.get('Password')
  }
  get confirmpassword() {
    return this.registartionForm.get('confirmPassword')
  }

  get first(): { [key: string]: any } {
    return this.registartionForm.controls;
  }

  loadAPI() {
    console.log("registartionForm",this.registartionForm)
    this.registartionForm.setValue({
      userName: "Vrinda",
      Password: "vrinHappy",
      confirmPassword: "vrinHappy",
      address: {
        city: "Chennai",
        state: "Tamil Nadu",
        postalCode: "12345"
      }
    })
  }
}
