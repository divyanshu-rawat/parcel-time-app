import { TestBed, getTestBed } from '@angular/core/testing';
import { PostOfficeService } from './post-office.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('PostOfficeService', () => {
  let injector: TestBed;
  let service: PostOfficeService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostOfficeService]
    });
    injector = getTestBed();
    service = injector.get(PostOfficeService);
    httpMock = injector.get(HttpTestingController);
});

describe('#getPostOffice', () => {
  it('should return an divyanshu<postOffice[]>', () => {

    service.getPostOffices().subscribe(users => {
      expect(users.length).toBe(11);
    });

    const req = httpMock.expectOne(`http://localhost:3000/office/list`);
    expect(req.request.method).toBe("GET");
  });
});
});