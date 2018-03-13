import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZyppyComponent } from './zyppy.component';

describe('ZyppyComponent', () => {
  let component: ZyppyComponent;
  let fixture: ComponentFixture<ZyppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZyppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZyppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
