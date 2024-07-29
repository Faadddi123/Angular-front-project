import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternDetailComponent } from './intern-detail.component';

describe('InternDetailComponent', () => {
  let component: InternDetailComponent;
  let fixture: ComponentFixture<InternDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
