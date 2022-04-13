import { Component, Input, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MainService } from '../main.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // @Input()  dataSource:any;

  public dataSource!:MatTableDataSource<any>;
 

  @ViewChild('scheduledOrdersPaginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [ 'name', 'weight', ];


  constructor(private _mainService: MainService) {
  
   }

  ngOnInit(): void {
    this.getExchangeData()
  }
  applyFilter(event:any){
    const filterValue = (event.target as HTMLInputElement).value;
    this._mainService.searchData(filterValue).subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    })
    

  }
 
  getExchangeData() {
    this._mainService.getData().subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    })
  }

}
