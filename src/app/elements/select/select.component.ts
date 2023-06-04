import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  disableSelect = new FormControl(false);
  @Input() parentForm!: FormGroup;
  @Input() fieldType!: String;
  @Input() formField!: string;
  @Input() label!: string;
  @Input() class!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
