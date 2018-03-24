import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListHomeComponent } from './to-do-list-home.component';

describe('ToDoListHomeComponent', () => {
  let component: ToDoListHomeComponent;
  let fixture: ComponentFixture<ToDoListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
