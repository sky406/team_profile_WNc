import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../profile/interfaces/profile.interface'


@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private http:HttpClient) { }

  private profileUrl =  "http://localhost:4400";



getSingleUser(ID:number){
  return this.http.get<Profile>(this.profileUrl + "/" + ID);
}

}
