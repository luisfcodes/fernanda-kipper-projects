import { Component, inject } from '@angular/core';
import { FormSubmitService } from '../../services/form-submit.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private formSubmitService = inject(FormSubmitService);
  title: string;
  showTitle = true;

  constructor() {
    this.title = 'Hello World';
  }

  submit() {
    this.formSubmitService.handleFormSubmit({
      payload: [],
      loaded: true,
      loading: false,
    });
  }
}
