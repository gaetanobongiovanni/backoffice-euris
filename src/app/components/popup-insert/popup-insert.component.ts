import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ProductDTO } from './../../models/product-dto';
import { StateService } from './../../services/state.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-popup-insert',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './popup-insert.component.html',
  styleUrl: './popup-insert.component.scss'
})
export class PopupInsertComponent implements OnInit {

  @Input() product: ProductDTO = new ProductDTO();
  @Output() insert: EventEmitter<any> = new EventEmitter();
  employees!: Observable<string[]>;

  constructor (
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.employees = this.stateService.employees$;
  }

  save() {
    this.insert.emit();
  }

}
