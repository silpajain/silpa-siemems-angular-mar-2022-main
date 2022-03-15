import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'label-component',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent implements OnInit {

  @Input()
  message :String;

  constructor() { 
    this.message="Text Here";
  }

  ngOnInit(): void {
  }

}
