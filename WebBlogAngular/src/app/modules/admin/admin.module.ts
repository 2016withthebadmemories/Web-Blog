import { AuthGuard } from './guards/auth.guard';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ListCommentComponent } from './modules/comment/list-comment/list-comment.component';
import {MatDialogModule} from '@angular/material/dialog';
 
@NgModule({
  declarations: [AdminComponent],
  imports: [AdminRoutingModule, MatSidenavModule, MatButtonToggleModule],
  exports: [RouterModule],
})
export class AdminModule {}
