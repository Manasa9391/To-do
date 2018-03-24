import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManasaComponent } from './manasa.component';

describe('ManasaComponent', () => {
  let component: ManasaComponent;
  let fixture: ComponentFixture<ManasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
