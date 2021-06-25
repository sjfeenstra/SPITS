import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { RollService } from './roll.service';

describe('RollService', () => {
  let service: RollService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [RollService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RollService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRoll() returns right data', () => {
    const mockRoll = {
      roll_NR: '1',
      batch_NR: '23',
      patient: 'Jan',
    };

    service.getRol('1').subscribe((roll) => {
      expect(roll.roll_NR).toEqual('1');
      expect(roll.batch_NR).toEqual('23');
      expect(roll.patient).toEqual('Jan');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/roll/1/'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockRoll);
  });

  it('getRolls() returns right data', () => {
    const mockRolls = [
      {
        roll_NR: '1',
        batch_NR: '23',
        patient: 'Jan',
      },
      {
        roll_NR: '3',
        batch_NR: '23',
        patient: 'Tim',
      },
    ];

    service.getRols('23').subscribe((rolls) => {
      expect(rolls[0].roll_NR).toEqual('1');
      expect(rolls[0].batch_NR).toEqual('23');
      expect(rolls[0].patient).toEqual('Jan');
      expect(rolls[1].roll_NR).toEqual('3');
      expect(rolls[1].batch_NR).toEqual('23');
      expect(rolls[1].patient).toEqual('Tim');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/roll/?batch_NR=23'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockRolls);
  });
});
