import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ControleLoggenComponent } from './controle-loggen/controle-loggen.component';
import { VrijgifteComponent } from './vrijgifte/vrijgifte.component';

@NgModule({
  declarations: [ControleLoggenComponent, VrijgifteComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
})
export class ControlesModule {}
