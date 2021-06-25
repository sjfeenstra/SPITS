import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
  ],
})
export class UserModule {}
