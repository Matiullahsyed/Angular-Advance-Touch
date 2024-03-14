import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PopupService } from '../Shared/pop-up/popup.service';
import { SchemeService } from '../Shared/scheme.service';
import { MatDialog } from '@angular/material/dialog'
import { AddschemeComponent } from '../addscheme/addscheme.component';
import { Constants } from '../constants';
import { DetailsListComponent } from '../scheme-details/details-list/details-list.component';
@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.component.html',
  styleUrls: ['./schemes.component.css']
})
export class SchemesComponent implements OnInit {

  public allGatesSchemes: any = [];
  formdata: any = FormGroup;
  gatesSchemeId: any;
  dataOfTable: boolean = false;
  displayedColumns = ['insertionTimestamp', 'dmlStatus', 'title', 'description', 'userId', 'projectId', 'gatesSchemeId', 'action'];
  dataSource!: MatTableDataSource<any[]>;
  @ViewChild('paginator') paginator!: MatPaginator;

  constructor(private schemeService: SchemeService,
    private popupService: PopupService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAllGatesSchemes();
  }

  findAllGatesSchemes() {
    let getSchemeObject = Constants.getSchemeObject;
    this.schemeService.GetDraftPostDetails(getSchemeObject).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
      this.allGatesSchemes = data.data;
      this.dataOfTable = true;
    })
  }

  openPopupForAddScheme() {
    let dialogRef = this.dialog.open(AddschemeComponent, {
      width: '690px',
      panelClass: 'cofirm-dialog-container',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.schemeService.AddSchemeDetails(result).subscribe(data => {
        this.dataSource.data.unshift(...data.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource._updateChangeSubscription();
      },
      );
    });
  }

  deleteAddSchemeRecord(parm: any) {
    let deleteSchemeObject = Constants.deleteSchemeObject;
    let object: any = this.dataSource.data[parm];
    let id = object.gatesSchemeId;
    let newObj = {
      gatesSchemeId: id
    }
    deleteSchemeObject['data'] = newObj;
    this.schemeService.DeleteSchemeDetails(deleteSchemeObject).subscribe(data => {
      this.dataSource.data.splice(parm, 1);
      this.dataSource._updateChangeSubscription();
    },
    );
  }

  openUpdateDialog(parm: any) {
    let object = this.allGatesSchemes[parm];
    let dialogRef = this.dialog.open(AddschemeComponent, {
      width: '690px',
      panelClass: 'cofirm-dialog-container',
      disableClose: true,
      data: object
    });
    dialogRef.afterClosed().subscribe(result => {
      this.schemeService.UpdateSchemeDetails(result).subscribe(data => {
        this.dataSource.data.splice(parm, 1, ...data.data);
        this.dataSource._updateChangeSubscription();
      },
      );
    });
  }
  openDialogfindGatesDetail(id:any){
    return this.dialog.open(DetailsListComponent, {
      width: '1000px',
      panelClass: 'cofirm-dialog-container',
      disableClose: true,
      data: id
    });
  }
  openDeleteDialog(parm: any) {
    this.popupService.openConfirmationDialog("Are you sure to delete this record ?")
      .afterClosed().subscribe(res => {
        if (res) {
          this.deleteAddSchemeRecord(parm);
        }
      });
  }
}
