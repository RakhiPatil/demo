import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KavitaComponent } from './kavita/kavita.component';
import { RakhiComponent } from './rakhi/rakhi.component';
import { RushiComponent } from './rushi/rushi.component';
import { RouterModule, Routes } from '@angular/router';

var kv: Routes =[
  {
    path:'', component:KavitaComponent,
    children: [
      {
        path:'rakhi', component:RakhiComponent
      },
      {
        path:'rushi', component:RushiComponent
      },
    ]
  }
]

@NgModule({
  declarations: [
    KavitaComponent,
    RakhiComponent,
    RushiComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(kv)
  ]
})
export class ChhotulalModule { }
