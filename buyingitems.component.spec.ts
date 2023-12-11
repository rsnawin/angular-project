import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyingitemsComponent } from './buyingitems.component';

describe('BuyingitemsComponent', () => {
  let component: BuyingitemsComponent;
  let fixture: ComponentFixture<BuyingitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyingitemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyingitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
