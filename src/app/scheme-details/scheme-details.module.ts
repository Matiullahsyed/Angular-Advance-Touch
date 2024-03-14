import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsListComponent } from './details-list/details-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { AddschemeDetailsComponent } from './addscheme-details/addscheme-details.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetailsListComponent,
    AddschemeDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatSortModule,
  ],
  exports:[
    DetailsListComponent
  ]
})
export class SchemeDetailsModule { }
