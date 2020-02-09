import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItem.ModalComponent } from './edit-item.modal.component';

describe('EditItem.ModalComponent', () => {
  let component: EditItem.ModalComponent;
  let fixture: ComponentFixture<EditItem.ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItem.ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItem.ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
