import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let service: OrderService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [OrderService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(OrderService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getOrder() returns right data', () => {
    const mockOrder = {
      order_NR: '1',
      institute: 'Ziekenhuis',
      order_released: false,
    };

    service.getOrder('1').subscribe((order) => {
      expect(order.order_NR).toEqual('1');
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/order/1/'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockOrder);
  });

  it('getOrders() returns right data', () => {
    const mockOrders = [
      {
        order_NR: '1',
        institute: 'Ziekenhuis',
        order_released: false,
      },
      {
        order_NR: '2',
        institute: 'Ziekenhuis',
        order_released: true,
      },
    ];

    service.getOrders().subscribe((orders) => {
      expect(orders[0].order_NR).toEqual('1');
      expect(orders[0].institute).toEqual('Ziekenhuis');
      expect(orders[0].order_released).toEqual(false);
      expect(orders[1].order_NR).toEqual('2');
      expect(orders[1].order_released).toEqual(true);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/order/'
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockOrders);
  });

  it('vrijgifte() returns right data', () => {
    const mockOrder = {
      order_NR: '1',
      institute: 'Ziekenhuis',
      order_released: false,
    };

    service.vrijgifte(mockOrder).subscribe((order) => {
      expect(order).toEqual(mockOrder);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8000/api/ordervrijgifte/1/'
    );

    expect(req.request.method).toEqual('PATCH');

    req.flush(mockOrder);
  });
});
