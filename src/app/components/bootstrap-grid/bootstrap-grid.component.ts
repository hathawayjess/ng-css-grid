import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-bootstrap-grid',
  templateUrl: './bootstrap-grid.component.html',
  styleUrls: ['./bootstrap-grid.component.css']
})
export class BootstrapGridComponent implements OnInit {
  data = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }

}
