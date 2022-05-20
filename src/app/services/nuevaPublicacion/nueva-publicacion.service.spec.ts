import { TestBed } from '@angular/core/testing';

import { NuevaPublicacionService } from './nueva-publicacion.service';

describe('NuevaPublicacionService', () => {
  let service: NuevaPublicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NuevaPublicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
