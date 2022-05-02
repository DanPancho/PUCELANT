import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuprincipalComponent } from './menuprincipal.component';

describe('MenuprincipalComponent', () => {
  let component: MenuprincipalComponent;
  let fixture: ComponentFixture<MenuprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuprincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
