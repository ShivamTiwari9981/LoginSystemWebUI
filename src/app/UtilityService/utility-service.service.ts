import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {ResponseModel} from '../Models/GetResponseModel'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {
 _url="https://localhost:7283/api";
  responseVm:any;
  constructor(private httpClient:HttpClient) { }
  public GetResponse(url:string)
  {
   return this.httpClient.get(this._url+url);
  }

  public PostResponse(url:string,data:any)
  {
    let a=this._url+url;
    console.log("data"+data)
    console.log("url"+a)
   return this.httpClient.post(this._url+url,data)
  }

}
