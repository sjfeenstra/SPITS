import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ControleService } from './controle.service';

describe('ControleService', () => {
  let service: ControleService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ControleService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ControleService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createCheck() returns right data', () => {
    const mockCheck = {
      order_NR: '1',
      batch_NR: '',
      roll_NR: '',
      bag_NR: '',
      check_type: 'Line',
      checked_by: 'Jan',
      check_remarks: '',
    };

    service.createCheck(mockCheck).subscribe((check) => {
      expect(check.order_NR).toEqual('1');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/check/'
    );

    expect(req.request.method).toEqual('POST');

    req.flush(mockCheck);
  });

  it('getChecks() returns right data', () => {
    const mockChecks = [
      {
        order_NR: '1',
        batch_NR: '',
        roll_NR: '',
        bag_NR: '',
        check_type: 'Line',
        checked_by: 'Jan',
        check_remarks: '',
      },
      {
        order_NR: '1',
        batch_NR: '',
        roll_NR: '',
        bag_NR: '',
        check_type: 'Scheur',
        checked_by: 'Jan',
        check_remarks: '',
      },
    ];
    service.getChecks('1').subscribe((checks) => {
      expect(checks[0].check_type).toEqual('Line');
      expect(checks[1].check_type).toEqual('Scheur');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/check/1'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockChecks);
  });
});
