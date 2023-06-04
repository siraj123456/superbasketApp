import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() fieldType!: String;
  @Input() formField!: string;
  @Input() label!: string;
  @Input() class!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
