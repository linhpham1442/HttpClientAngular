import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadComponent } from './read.component';
import { CreateComponent } from '../create/create.component';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {path:'create/:id', component:CreateComponent}
// ];

@NgModule({
  declarations: [
    ReadComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ReadModule { }
