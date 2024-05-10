import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenueComponent } from './dropdown-menue.component';

describe('DropdownMenueComponent', () => {
  let component: DropdownMenueComponent;
  let fixture: ComponentFixture<DropdownMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropdownMenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DropdownMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
