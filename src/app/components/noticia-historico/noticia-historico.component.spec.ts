import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaHistoricoComponent } from './noticia-historico.component';

describe('NoticiaHistoricoComponent', () => {
  let component: NoticiaHistoricoComponent;
  let fixture: ComponentFixture<NoticiaHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
