import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  username : string;
  password :string;
  email : string;

  constructor() { 
    this.username="";
    this.password="";
    this.email="";
  }

  ngOnInit(): void {
  }

  signup(){
      console.log(this.username,this.password,this.email);
  }

  clear(){
    this.username="";
    this.password="";
    this.email="";
  }

}
