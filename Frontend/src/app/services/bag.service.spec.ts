import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { BagService } from './bag.service';

describe('BagService', () => {
  let service: BagService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [BagService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BagService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getBag() returns right data', () => {
    const mockBag = {
      bag_NR: '1',
      roll_NR: '23',
      bag_type: 'Aanloop',
    };

    service.getBag('1').subscribe((bag) => {
      expect(bag.bag_NR).toEqual('1');
      expect(bag.roll_NR).toEqual('23');
      expect(bag.bag_type).toEqual('Aanloop');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/bag/1/'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockBag);
  });

  it('getBags() returns right data', () => {
    const mockBags = [
      {
        bag_NR: '1',
        roll_NR: '23',
        bag_type: 'Aanloop',
      },
      {
        bag_NR: '2',
        roll_NR: '23',
        bag_type: 'Afloop',
      },
    ];

    service.getBags('23').subscribe((bags) => {
      expect(bags[0].bag_NR).toEqual('1');
      expect(bags[0].roll_NR).toEqual('23');
      expect(bags[0].bag_type).toEqual('Aanloop');
      expect(bags[1].bag_NR).toEqual('2');
      expect(bags[1].roll_NR).toEqual('23');
      expect(bags[1].bag_type).toEqual('Afloop');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/bag/?roll_NR=23'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockBags);
  });

  it('getErrors() returns right data', () => {
    const mockErrors = [
      {
        bag_NR: '23',
        error_NR: '1',
        error: 'Te Weinig',
        patient: 'Pieter',
        error_desc: 'Niks',
        free_text: '',
        error_datetime: new Date(),
        corrected_by: 'Jan',
        checked_by: 'Jan',
      },
      {
        bag_NR: '23',
        error_NR: '2',
        error: 'Te Veel',
        patient: 'Jan',
        error_desc: 'Niks',
        free_text: '',
        error_datetime: new Date(),
        corrected_by: 'Jan',
        checked_by: 'Jan',
      },
    ];

    service.getErrors('23').subscribe((errors) => {
      expect(errors[0].bag_NR).toEqual('23');
      expect(errors[0].error_NR).toEqual('1');
      expect(errors[0].error).toEqual('Te Weinig');
      expect(errors[1].bag_NR).toEqual('23');
      expect(errors[1].error_NR).toEqual('2');
      expect(errors[1].error).toEqual('Te Veel');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/error/?bag_NR=23'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockErrors);
  });

  it('getMissingpictures() returns right data', () => {
    const mockMissingPictures = [
      {
        bag_NR: '1',
        patient: 'Jantje',
        corrected_by: 'Pieter',
        checked_by: 'Pieter',
      },
      {
        bag_NR: '1',
        patient: 'Jan',
        corrected_by: 'Pieter',
        checked_by: 'Pieter',
      },
    ];

    service.getMissingPictures('1').subscribe((missingPictures) => {
      expect(missingPictures[0].bag_NR).toEqual('1');
      expect(missingPictures[0].patient).toEqual('Jantje');
      expect(missingPictures[0].corrected_by).toEqual('Pieter');
      expect(missingPictures[0].checked_by).toEqual('Pieter');
      expect(missingPictures[1].bag_NR).toEqual('1');
      expect(missingPictures[1].patient).toEqual('Jan');
      expect(missingPictures[1].corrected_by).toEqual('Pieter');
      expect(missingPictures[1].checked_by).toEqual('Pieter');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/missingpictures/?bag_NR=1'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockMissingPictures);
  });

  it('getMissingPills() returns right data', () => {
    const mockMissingPills = [
      {
        bag_NR: '1',
        pil_ID: '465231',
        medication_name: 'Ibruprofen',
        free_text: '',
      },
      {
        bag_NR: '1',
        pil_ID: '4654512',
        medication_name: 'Paracetemol',
        free_text: '',
      },
    ];

    service.getBags('23').subscribe((bags) => {
      expect(bags[0].bag_NR).toEqual('1');
      expect(bags[0].pil_ID).toEqual('465231');
      expect(bags[0].medication_name).toEqual('Ibruprofen');
      expect(bags[0].free_text).toEqual('');
      expect(bags[1].bag_NR).toEqual('1');
      expect(bags[1].pil_ID).toEqual('4654512');
      expect(bags[1].medication_name).toEqual('Paracetemol');
      expect(bags[1].free_text).toEqual('');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/bag/?roll_NR=23'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockMissingPills);
  });
});
