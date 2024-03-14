import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PopUpComponent} from './../../pop-up/pop-up.component';
@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog:MatDialog) { }

  openConfirmationDialog(msg:any){
    return this.dialog.open(PopUpComponent,{
      width:'390px',
      panelClass:'cofirm-dialog-container',
      disableClose:true,
      data :{
        message:msg
      }
    });
  }
}
