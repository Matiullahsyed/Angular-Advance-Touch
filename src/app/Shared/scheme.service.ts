import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class SchemeService {
  constructor(private http: HttpClient) { }
  
  baseUrl= Constants.baseUrl;
  GetDraftPostDetails(obj:any){
    return this.http.post<any>(this.baseUrl + 'findAllGatesSchemes', obj);
  }
  AddSchemeDetails(obj:any){
    return this.http.post<any>(this.baseUrl + 'addGatesSchemes', obj);
  }
  DeleteSchemeDetails(obj:any){
    return this.http.post<any>(this.baseUrl + 'deleteGatesSchemes', obj);
  }
  UpdateSchemeDetails(obj:any){
    return this.http.post<any>(this.baseUrl + 'updateGatesSchemes', obj);
  }
}
