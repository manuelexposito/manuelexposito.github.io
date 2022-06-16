import { Router } from '@angular/router';
import { CommercesService } from './../../services/commerces.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Property } from './../../models/property_dto';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-commercialproperty-list',
  templateUrl: './commercialproperty-list.component.html',
  styleUrls: ['./commercialproperty-list.component.css'],
})
export class CommercialPropertyListComponent implements OnInit {
  commerces: Property[] = [];

  displayedColumns: string[] = [
    'logo',
    'name',
    'phone',
    'email',
    'address',
    'available',
    'actions'
  ];
  dataSource = new MatTableDataSource<Property>(this.commerces);

  page: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private commercesService: CommercesService
  ) {}

  ngOnInit(): void {

    this.fetchCommerces(this.page);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchCommerces(page: number) {
    return this.commercesService.fetchCommerces(page).subscribe((e) => {
      console.log(e.content);
      this.commerces = e.content;
      this.dataSource = new MatTableDataSource<Property>(this.commerces);
    });
  }
}
