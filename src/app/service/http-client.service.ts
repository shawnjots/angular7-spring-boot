import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
    public salary:string,
  ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<Employee[]>(environment.ENV);
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>(environment.ENV + '/'+ employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>(environment.ENV, employee);
  }
}
