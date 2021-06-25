import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // The global api path
  api_url = environment.api_url;

  constructor() {}

  getApiUrl() {
    return this.api_url;
  }
}
