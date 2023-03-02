import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) {

   }
   createuser(data:any){
    return this.http.post("http://localhost:3500/v1",data)
   }
   getusers(){
    return this.http.get("http://localhost:3500/alluser")
   }
   updateuser(updatedata:any,updaterecord:any){
    console.log(updatedata);
    
    return this.http.post("http://localhost:3500/upateuser/api/"+updatedata,updaterecord)

   }
   deleteuser(data:any,dataany:any){
    return this.http.post("http://localhost:3500/d1/"+data,dataany)
   }
}
