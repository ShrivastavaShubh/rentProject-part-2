import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PropertyDialogBoxComponent } from './property-dialog-box/property-dialog-box.component';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  propertyList: any;
  constructor(public service: ServiceService, private matDialog: MatDialog) {
  }
  ngOnInit() {
    this.service.refreshgridSubject.subscribe((response) => {
      this.getProperty();
    })
  }
  getProperty() {
    this.service.getPropertyList().subscribe((response: any) => {
      this.propertyList = response.records;
      console.log('res', this.propertyList);
    })
  }
  onDialogOpen() {
    const dialogRef = this.matDialog.open(PropertyDialogBoxComponent, {
      width: '50%',
      height: '500'
    });
  }
}
