import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VandanaComponent } from './vandana/vandana.component';
import { RajshriComponent } from './rajshri/rajshri.component';
import { DipakComponent } from './dipak/dipak.component';
import { RouterModule, Routes } from '@angular/router';

var vn: Routes = [
  {
    path:'', component:VandanaComponent,
    children: [
      {
        path:'rajshri', component:RajshriComponent
      },
      {
        path:'dipak', component:DipakComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    VandanaComponent,
    RajshriComponent,
    DipakComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(vn)
  ]
})
export class MangalModule { }
