import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-edit-item.modal',
  templateUrl: './edit-item.modal.component.html',
  styleUrls: ['./edit-item.modal.component.scss']
})
export class EditItemModalComponent implements OnInit {

  @Input() item: BudgetItem;

  constructor() { }

  ngOnInit() {
  }

  onSubmitted(updatedItem: BudgetItem) {

  }

}
