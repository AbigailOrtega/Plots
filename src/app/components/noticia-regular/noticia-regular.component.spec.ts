import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaRegularComponent } from './noticia-regular.component';

describe('NoticiaRegularComponent', () => {
  let component: NoticiaRegularComponent;
  let fixture: ComponentFixture<NoticiaRegularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaRegularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
