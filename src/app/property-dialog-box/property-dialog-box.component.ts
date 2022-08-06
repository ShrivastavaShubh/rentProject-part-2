import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-property-dialog-box',
  templateUrl: './property-dialog-box.component.html',
  styleUrls: ['./property-dialog-box.component.scss']
})
export class PropertyDialogBoxComponent implements OnInit {
  propertyFormGroup: FormGroup;
  constructor(public service: ServiceService, public fb: FormBuilder, private dialogRef: MatDialogRef<PropertyDialogBoxComponent>) {
    this.propertyFormGroup = this.fb.group({
      name: [''],
      description: [''],
      size: ['']
    })
  }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave() {
    let data = {
      "fields": {
        name: this.propertyFormGroup.get('name')?.value,
        description: this.propertyFormGroup.get('description')?.value,
        size: this.propertyFormGroup.get('size')?.value
      }
    }
    let formData = { "records": [data] }
    this.service.addProperty(formData).subscribe((response: any) => {
      this.service.refreshgridSubject.next(response);
    })
    this.propertyFormGroup.reset();
    this.dialogRef.close();
  }
}
