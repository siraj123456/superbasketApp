import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() fieldType!: String;
  @Input() formField!: string;
  @Input() label!: string;
  @Input() class!: string;

  max = 10;
  min = 0;
  constructor() { }


  ngOnInit(): void {
    console.log("formField", this.formField);
    
  }
}
