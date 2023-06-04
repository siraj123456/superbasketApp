import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  value = 2;
  vertical = false;
  tickInterval = 1;

  parentForm: FormGroup = this.fb.group({});
  fields = [
    {form: this.parentForm,
     label: "First Name", 
     fieldType: "text", 
    formField:"firstName",
    class:"col-3",
    innerClass:"inner-class-field"
  },

    {form: this.parentForm,
     label: "Last Name", 
     fieldType: "password", 
    formField:"lastName",
    class:"col-3",
    innerClass:"inner-class-field"
  },

    {form: this.parentForm,
    label: "Email", 
    fieldType: "email", 
   formField:"email",
   class:"col-3",
   innerClass:"inner-class-field"
  },

   {form: this.parentForm,
    label: "address", 
    fieldType: "text", 
   formField:"address",
   class:"col-3",
   innerClass:"inner-class-field"
  },

   {
    form: this.parentForm,
    label: "age",
    fieldType: "slider",
    formField: "age",
    class:"col-3",
    innerClass:"inner-class-field"

   },
   {
    form: this.parentForm,
    label: "budget",
    fieldType: "slider",
    formField: "budget",
    class:"col-3",
    innerClass:"inner-class-field"

   },
   {form: this.parentForm,
    label: "Status", 
    fieldType: "text", 
   formField:"status",
   class:"col-3",
   innerClass:"inner-class-field"
  },

   {form: this.parentForm,
    label: "select", 
    fieldType: "select", 
   formField:"select",
   class:"col-3",
   innerClass:"inner-class-field"
  },
   {form: this.parentForm,
    label: "testing", 
    fieldType: "select", 
   formField:"testing",
   class:"col-3",
   innerClass:"inner-class-field"
  }
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.parentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      age: [20, Validators.required],
      budget: [20, Validators.required],
      status: ['', Validators.required],
      select: ['', Validators.required],
      testing: ['', Validators.required]
    })

    this.parentForm.valueChanges.subscribe(newVal => console.log("value changes",newVal));
  }
  onSubmit() {
    console.log('onsubmit function');
    
    console.log("this.profileForm.value", this.parentForm?.value);
  }

  onChange(event: number = 2) {
    console.log("event",event);
    this.value = event;
  }

  createForm(val: number) {
    console.log("val",val);
    let i=0;
    this.buildField();

    while(i<val) {
      i++;
    }
  }

  buildField() {
    this.parentForm.addControl('gender', Validators.required);
    console.log(this.parentForm);
    
  }
}
