import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PassportAPIService {
  constructor(private httpClient: HttpClient) {}

  public uploadPassport(firstName: any, lastName: any, passNum: any, email: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` 
    });
    
    let options = { headers: headers };
    return this.httpClient.post<any>(`http://localhost:3000/passport`, {'first_name': firstName, 'last_name': lastName, 'passport_num': passNum, 'email': email}, options);
  }

  public retrieveDetails(id: number){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` 
    });
    
    let options = { headers: headers };
    return this.httpClient.get<any>(`http://localhost:3000/passport/${id}`, options);
  }

  public updateDetails(firstName: any, lastName: any, passNum: any, email: any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` 
    });
    
    let options = { headers: headers };
    return this.httpClient.put<any>(`http://localhost:3000/passport`, {'first_name': firstName, 'last_name': lastName, 'passportNum': passNum, 'email': email}, options);
  }
  
  public deleteRecord(id: number){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('access_token')}` 
    });
    
    let options = { headers: headers };
    return this.httpClient.delete<any>(`http://localhost:3000/passport/${id}`, options);
  }
}