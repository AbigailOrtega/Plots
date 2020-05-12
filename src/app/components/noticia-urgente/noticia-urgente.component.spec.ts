import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaUrgenteComponent } from './noticia-urgente.component';

describe('NoticiaUrgenteComponent', () => {
  let component: NoticiaUrgenteComponent;
  let fixture: ComponentFixture<NoticiaUrgenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaUrgenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaUrgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
