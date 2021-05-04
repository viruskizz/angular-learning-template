import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class GhibliService {

  private baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  listPeople() {
    const uri = this.baseUrl + '/people';
    return this.httpClient.get<any[]>(uri);
  }

  getPeople(id: string) {
    const uri = this.baseUrl + '/people/' + id;
    return this.httpClient.get<any>(uri);
  }
}
