import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationComponent } from './association.component';

describe('DocumentsComponent', () => {
  let component: AssociationComponent;
  let fixture: ComponentFixture<AssociationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AssociationComponent]
    });
    fixture = TestBed.createComponent(AssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
