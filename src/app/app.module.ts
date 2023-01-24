import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { InfosComponent } from './infos/infos.component';
import { AffichageComponent } from './affichage/affichage.component';
import { GarageComponent } from './garage/garage.component';
import { CarComponent } from './car/car.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { ChildButtonComponent } from './child-button/child-button.component';
import { TestComponent } from './test/test.component';
import { TestChildComponent } from './test-child/test-child.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {ToastrModule} from 'ngx-toastr';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    InfosComponent,
    AffichageComponent,
    GarageComponent,
    CarComponent,
    CustomInputComponent,
    ChildFormComponent,
    ChildButtonComponent,
    TestComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule, MatSelectModule, MatSnackBarModule, MatButtonModule, ToastrModule.forRoot(),
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
