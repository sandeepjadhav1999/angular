import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectIDUniqueValidatorDirective } from '../directives/project-idunique-validator.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProjectIDUniqueValidatorDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProjectIDUniqueValidatorDirective,
  ]
})
export class SharedModule { }