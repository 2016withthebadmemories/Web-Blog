import { AdminModule } from './modules/admin/admin.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () => 
      import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "home",
    loadChildren: () => 
      import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
