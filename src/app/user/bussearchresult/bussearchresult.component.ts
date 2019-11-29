import { Component, OnInit } from '@angular/core';
import { SelectBusService } from '../services/select-bus.service';


@Component({
  selector: 'app-bussearchresult',
  templateUrl: './bussearchresult.component.html',
  styleUrls: ['./bussearchresult.component.css']
})
export class BussearchresultComponent implements OnInit {
  busSearch = {};

  constructor(private BusService: SelectBusService) { }

  ngOnInit() {
 this.BusService.getbusData().subscribe(data => this.busSearch = data)
  }

  busData() {
    // this.BusService.getbusData().subscribe(data => this.busSearch = data)
  }
}
