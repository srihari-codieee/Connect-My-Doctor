import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';


@NgModule({
  declarations: [
    CommonModule,
     PatientsRoutingModule
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule
  ]
})
export class PatientModule { }
