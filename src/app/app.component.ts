import { StateService } from './services/state.service';
import { StoreService } from './services/store.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreDTO } from './models/store-dto';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [StoreService]
})
export class AppComponent implements OnInit{
  store: StoreDTO | undefined;
  constructor (
    private storeService: StoreService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.storeService.store().subscribe({
      next: (res: any) => {

        this.store = new StoreDTO().deserialize(res);
        this.stateService.Employees  = this.store.employees;
      },
      error: (err: any) => {

      }

    });
  }

}
