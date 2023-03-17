import { Component } from '@angular/core';
import {AuthService}from '../../services/auth.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
constructor(private authService:AuthService){}
data:any
onSave(){
  console.log("hello")
  // this.authService.GetString().subscribe(
  //   (response) => { this.data = response; },
	// (error) => { console.log(error); });
}
}
