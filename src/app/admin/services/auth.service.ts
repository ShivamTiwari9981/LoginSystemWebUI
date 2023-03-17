import { Injectable } from '@angular/core';
import { ILoginModel } from '../Interface/ILoginModel';
import {UtilityServiceService} from '../../UtilityService/utility-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private utilitySrevice:UtilityServiceService){}
  UserLogin(loginData:ILoginModel){
   let url= '/Account/login';
    return this.utilitySrevice.PostResponse(url,loginData)
  }

}
