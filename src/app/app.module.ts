import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddschemeComponent } from './addscheme/addscheme.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchemesComponent } from './schemes/schemes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatSortModule } from '@angular/material/sort';
import { SchemeDetailsModule } from './scheme-details/scheme-details.module';
@NgModule({
  declarations: [
    AppComponent,
    SchemesComponent,
    AddschemeComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    SchemeDetailsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatSortModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'schemes', pathMatch: 'full' },
      { path: 'schemes', component: SchemesComponent },
      { path: 'addscheme', component: AddschemeComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
