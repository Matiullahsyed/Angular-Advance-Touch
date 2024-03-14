import { Component, Inject, OnInit,} from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Constants} from '../constants';
@Component({
  selector: 'app-addscheme',
  templateUrl: './addscheme.component.html',
  styleUrls: ['./addscheme.component.css']
})
export class AddschemeComponent implements OnInit {
  title: any;
  formdata: any;
  userId: any;
  projectId: any;
  description: any;
  gatesSchemeId: any;
  gateSchemeIdHide:boolean=false;
  constructor(
    public dialogRef :MatDialogRef<AddschemeComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
   }
  ngOnInit(): void {
    if(this.data){
      this.formdata = new FormGroup({
        title: new FormControl(this.data.title),
        userId: new FormControl(parseInt(this.data.userId)),
        projectId: new FormControl(parseInt(this.data.userId)),
        gatesSchemeId: new FormControl(this.data.gatesSchemeId),
        description: new FormControl(this.data.description),
      });
    }
    else
    {
      this.formdata = new FormGroup({
        title: new FormControl(""),
        userId: new FormControl(""),
        projectId: new FormControl(""),
        gatesSchemeId: new FormControl(""),
        description: new FormControl(""),
      });
    }
  }

  closeDialog(){
    this.dialogRef.close(false);
  }

  addSchemeDetails(data: any) {
    if ((data.gatesSchemeId === undefined || data.gatesSchemeId === '')) {
      var dataObject = {
        "userId": parseInt(data.userId),
        "projectId": parseInt(data.projectId),
        "title": data.title,
        "description": data.description
      }
      var dataArr :any= [];
      dataArr.push(dataObject);
      let addteObject = Constants.addObject;
      addteObject['data']= dataArr;
      this.dialogRef.close(addteObject);
    }
    else {
      var dataOBj = {
        "gatesSchemeId": parseInt(data.gatesSchemeId),
        "title": data.title,
        "description": data.description
      }
      var dataArr:any = [];
      dataArr.push(dataOBj);
      let updateObject = Constants.updateObject;
      updateObject['data'] = dataArr;
      this.dialogRef.close(updateObject);
    }
  }
}
