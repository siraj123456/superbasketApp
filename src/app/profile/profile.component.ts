import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditProfileDialogComponent } from '../edit-profile-dialog/edit-profile-dialog.component';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm = new FormGroup({
    personalInfo: new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      position: new FormControl(''),  
      email: new FormControl(''),  
    }),
    
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("this.profileForm.value", this.profileForm.value);
    this.profileForm.patchValue({
      personalInfo: {firstName: '', lastName: '', position: '', email: ''},
      address: {
        street: '', city: '', state: '', zip: ''
      }
    });

    this.dialog.open(ProfileDialogComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  editProfile() {
    this.dialog.open(EditProfileDialogComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}
