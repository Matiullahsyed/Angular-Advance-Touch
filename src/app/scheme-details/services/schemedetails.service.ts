import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class SchemedetailsService {

  constructor(private http: HttpClient) { }
  baseUrl= Constants.gatesDetailUrl;
  FindAllGatesDetail(obj:any){
    return this.http.post<any>(this.baseUrl + 'findAllGatesDetail', obj);
  }
  DeleteGatesDetail(obj:any){
    return this.http.post<any>(this.baseUrl + 'deleteGatesDetail', obj);
  }
  AddSchemeDetails(obj:any){
    return this.http.post<any>(this.baseUrl + 'addGatesDetail', obj);
  }
  UpdateSchemeDetails(obj:any){
    return this.http.post<any>(this.baseUrl + 'updateGatesDetail', obj);
  }
}
