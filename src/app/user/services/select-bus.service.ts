import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectBusService {

  // private Root_url ="http://localhost:3000/buses"

  constructor(private http:HttpClient) { }

  getbusData() {
    return this.http.get('http://localhost:3000/buses');
  }

}
