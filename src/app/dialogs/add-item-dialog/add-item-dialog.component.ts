import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// export interface DialogData {
//   animal: string;
//   name: string;
// }

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css'],
})
export class AddItemDialogComponent implements OnInit {
  parentForm: FormGroup = this.fb.group({});
  fields = [
    {
      form: this.parentForm,
      label: 'Title',
      fieldType: 'text',
      formField: 'title',
      class: 'col-12',
      innerClass: 'inner-class',
    },
    {
      form: this.parentForm,
      label: 'Quantity',
      fieldType: 'text',
      formField: 'quantity',
      class: 'col-12',
      innerClass: 'inner-class',
    },
    {
      form: this.parentForm,
      label: 'Expiration Date',
      fieldType: 'text',
      formField: 'expirationDate',
      class: 'col-12',
      innerClass: 'inner-class',
    },
    {
      form: this.parentForm,
      label: 'Description',
      fieldType: 'text',
      formField: 'description',
      class: 'col-12',
      innerClass: 'inner-class',
    },
  ];
  generatedValue: any = 0;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log("on open; data:", data.data.length);
    this.generatedValue = data.data.length+1;
    
  }

  onNoClick(): void {
    this.parentForm = this.fb.group({});
    this.dialogRef.close();
  }

  onSubmit(index:any) {
    let newItem = { 
      position: 0,
      url:'cocacola.png',
      title: 'Cocacola Can',
      expirationDate: '12-3-23',
      quantity: 4,
      weight: 12,
      description : 'NB: dont drink everyday!'
     };    
     this.parentForm.patchValue({position:index})
    console.log("this.profileForm.value", this.parentForm?.value);
    this.dialogRef.close(this.parentForm?.value)
  }

  ngOnInit(): void {
    this.parentForm = this.fb.group({
      position: ['', Validators.required],
      title: ['', Validators.required],
      quantity: ['', Validators.required],
      expirationDate: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.parentForm.valueChanges.subscribe((newVal) =>
      console.log('value changes', newVal)
    );
  }
}
