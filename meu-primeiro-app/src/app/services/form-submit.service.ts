import { Injectable } from '@angular/core';

interface Idata {
  payload: [];
  loading: boolean;
  loaded: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FormSubmitService {
  constructor() {}

  handleFormSubmit(data: Idata) {
    console.log(`Enviando dados: ${JSON.stringify(data)}`);
  }
}
