import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-addscheme-details',
  templateUrl: './addscheme-details.component.html',
  styleUrls: ['./addscheme-details.component.css']
})
export class AddschemeDetailsComponent implements OnInit {
  formdata:any;
  isUpdateForm:boolean=false;

  constructor(
    public dialogRef :MatDialogRef<AddschemeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  closeDialog(){
    this.dialogRef.close(false);
  }
  ngOnInit(): void {
    if(this.data){
      this.isUpdateForm=true;
      this.formdata = new FormGroup({
        gatesSchemeId: new FormControl(parseInt(this.data.gatesSchemeId.gatesSchemeId)),
        gateTitle: new FormControl(this.data.gateTitle),
        description: new FormControl(this.data.description),
        rangeMin: new FormControl(this.data.rangeMin),
        rangeMax: new FormControl(this.data.rangeMax),
        gateColor: new FormControl(this.data.gateColor),
        gateShortName:new FormControl(this.data.gateColor),

      });
    }
    else
    {
      this.formdata = new FormGroup({
        gatesSchemeId: new FormControl(""),
        gateTitle: new FormControl(""),
        description: new FormControl(""),
        rangeMin: new FormControl(""),
        rangeMax: new FormControl(""),
        gateColor: new FormControl(""),
        gateShortName:new FormControl(""),
      });
    }
  }
  addSchemeDetails(data:any){
    if (!this.isUpdateForm) {
      var dataObject = {
        "gatesSchemeId": parseInt(data.gatesSchemeId),
        "gateTitle": data.gateTitle,
        "description": data.description,
        "gateShortName": data.gateShortName,
        "rangeMin": parseInt(data.rangeMin),
        "rangeMax": parseInt(data.rangeMax),
        "gateColor": data.gateColor,
      }
      var dataArr :any= [];
      dataArr.push(dataObject);
      let addGatesDetailObject = Constants.addGatesDetailObject;
      addGatesDetailObject['data']= dataArr;
      this.dialogRef.close(addGatesDetailObject);
      //let addGatesDetailObject=Constants.addGatesDetailObject;
    }
    else {
      var dataOBj = {
        "gateDetailId": parseInt(this.data.gateDetailId),
        "gatesSchemeId": parseInt(data.gatesSchemeId),
        "gateTitle": data.gateTitle,
        "description": data.description,
        "gateShortName": data.gateShortName,
        "rangeMin": parseInt(data.rangeMin),
        "rangeMax": parseInt(data.rangeMax),
        "gateColor": data.gateColor,
      }
      var dataArr:any = [];
      dataArr.push(dataOBj);
      let updateObject = Constants.updateGatesDetailObject;
      updateObject['data'] = dataArr;
      this.dialogRef.close(updateObject);
    }
  }

}
