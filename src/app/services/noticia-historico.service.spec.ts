import { TestBed } from '@angular/core/testing';

import { NoticiaHistoricoService } from './noticia-historico.service';

describe('NoticiaHistoricoService', () => {
  let service: NoticiaHistoricoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticiaHistoricoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
