import { Component } from '@angular/core';
import { FormGroup, FormControl,  Validators } from '@angular/forms';
import {AuthService}from '../../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userPassword: new FormControl('', [Validators.required, Validators.maxLength(8)])
  })
  SignupUser(){

  }
}
