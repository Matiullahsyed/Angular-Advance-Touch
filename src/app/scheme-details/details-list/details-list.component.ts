import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Constants } from 'src/app/constants';
import { PopUpComponent } from 'src/app/pop-up/pop-up.component';
import { AddschemeDetailsComponent } from '../addscheme-details/addscheme-details.component';
import { SchemedetailsService } from '../services/schemedetails.service';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.css']
})

export class DetailsListComponent implements OnInit {

  displayedColumns = ['gateDetailId', 'gatesSchemeId', 'gateTitle', 'description', 'gateColor', 'gateShortName', 'rangeMin', 'rangeMax', 'action'];
  dataSource!: MatTableDataSource<any[]>;
  @ViewChild('paginator') paginator!: MatPaginator;
  gatesSchemesDetails: any = [];
  constructor(private schemedetailsService: SchemedetailsService,
    public dialogRef: MatDialogRef<DetailsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAllGatesDetail();
  }
  findAllGatesDetail() {
    let findAllGatesDetailObject = Constants.findAllGatesDetailObject;
    let newObj = {
      gatesSchemeId: this.data
    }
    findAllGatesDetailObject['data'].gatesDetail = newObj;
    this.schemedetailsService.FindAllGatesDetail(findAllGatesDetailObject).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
      this.gatesSchemesDetails = data.data;
    });
  }
  openDeleteConfirmationDialog(parm: any) {
    let dialogRef = this.dialog.open(PopUpComponent, {
      width: '390px',
      panelClass: 'cofirm-dialog-container',
      disableClose: true,
      data: {
        message: 'Are you sure to delete this record ?'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let deleteGatesDetailObject = Constants.deleteGatesDetailObject;
        let object: any = this.dataSource.data[parm];
        let id = object.gateDetailId;
        let newObj = {
          gateDetailId: id
        }
        deleteGatesDetailObject['data'] = newObj;
        this.schemedetailsService.DeleteGatesDetail(deleteGatesDetailObject).subscribe(data => {
          this.dataSource.data.splice(parm, 1);
          this.dataSource._updateChangeSubscription();
        },
        );
      }
    });
  }
  openPopupForAddSchemeDetails(){
    let dialogRef = this.dialog.open(AddschemeDetailsComponent, {
      width: '690px',
      panelClass: 'cofirm-dialog-container',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.schemedetailsService.AddSchemeDetails(result).subscribe(data => {
        this.dataSource.data.unshift(...data.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource._updateChangeSubscription();
      },
      );
    });
  }
  openSchemeUpdateDialog(parm: any) {
    let object = this.dataSource.data[parm];
    let dialogRef = this.dialog.open(AddschemeDetailsComponent, {
      width: '690px',
      panelClass: 'cofirm-dialog-container',
      disableClose: true,
      data: object
    });
    dialogRef.afterClosed().subscribe(result => {
      this.schemedetailsService.UpdateSchemeDetails(result).subscribe(data => {
        this.dataSource.data.splice(parm, 1, ...data.data);
        this.dataSource._updateChangeSubscription();
      },
      );
    });
  }
  closeDeleteDialog() {
    this.dialogRef.close(false);
  }
}
