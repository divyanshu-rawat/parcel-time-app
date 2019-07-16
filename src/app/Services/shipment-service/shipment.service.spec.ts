import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { ShipmentService } from './shipment.service';

describe('ShipmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ShipmentService = TestBed.get(ShipmentService);
    expect(service).toBeTruthy();
  });
});
