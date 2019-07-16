import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogService } from './dialog.service';

describe('DialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatDialogModule
    ],
    providers: [
      DialogService, { provide: MatDialogRef, useValue: {} },
    ],
  }));

  it('should be created', () => {
    const service: DialogService = TestBed.get(DialogService);
    expect(service).toBeTruthy();
  });
});
