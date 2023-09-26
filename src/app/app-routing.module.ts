import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'ch',
    loadChildren:() =>
    import('./chhotulal/chhotulal.module').then((a =>
    a.ChhotulalModule))
  },
  {
    path:'mg',
    loadChildren:() =>
    import('./mangal/mangal.module').then((a =>
    a.MangalModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
