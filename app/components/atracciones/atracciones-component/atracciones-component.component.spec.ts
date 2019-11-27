import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtraccionesComponentComponent } from './atracciones-component.component';

describe('AtraccionesComponentComponent', () => {
  let component: AtraccionesComponentComponent;
  let fixture: ComponentFixture<AtraccionesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtraccionesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtraccionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
