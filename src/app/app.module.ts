import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreComponent } from './store/store.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { EditProfileDialogComponent } from './edit-profile-dialog/edit-profile-dialog.component';
import { FormsComponent } from './forms/forms.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { InputComponent } from './elements/input/input.component';
import { SliderComponent } from './elements/slider/slider.component';
import { DatePickerComponent } from './elements/date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { SelectComponent } from './elements/select/select.component';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import {MatTableModule} from '@angular/material/table';
import { AddItemDialogComponent } from './dialogs/add-item-dialog/add-item-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import {MatBadgeModule} from '@angular/material/badge';
import { AttentionDialogComponent } from './attention-dialog/attention-dialog.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavigatorComponent,
    MenuComponent,
    ProfileComponent,
    DashboardComponent,
    StoreComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProfileDialogComponent,
    EditProfileDialogComponent,
    FormsComponent,
    MenuMobileComponent,
    CheckboxComponent,
    InputComponent,
    SliderComponent,
    DatePickerComponent,
    SelectComponent,
    ItemComponent,
    ItemsComponent,
    AddItemDialogComponent,
    AttentionDialogComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatSelectModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
