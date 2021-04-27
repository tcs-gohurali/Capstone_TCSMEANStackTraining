import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from './model.serverResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  config:any = {
    URL:'http://localhost:',
    PORT:'4100'
  }

  constructor(public http:HttpClient) { }

  sendCredentials(employee:any):Observable<ServerResponse>{
    let URL = this.config["URL"]+this.config["PORT"]+"/v1/employee/login"
    console.log("[LOG]: Going to: " + URL)
    return this.http.post<ServerResponse>(URL,employee)
  }
}
