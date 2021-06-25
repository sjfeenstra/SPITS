import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ControleLoggenComponent } from './controle-loggen.component';

describe('ControleLoggenComponent', () => {
  let component: ControleLoggenComponent;
  let fixture: ComponentFixture<ControleLoggenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControleLoggenComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatButtonModule,
        MatSelectModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleLoggenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
