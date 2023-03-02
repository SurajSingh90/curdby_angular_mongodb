import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  useraray:any[]=[]
  userids =''
  name:string=''
  lastname:string=''
  phone:string=''
  gmail:string=''

  // constructor(private http:HttpClient){}
  constructor(private service: CrudService){
    
  }
  ngOnInit(): void {
    this.getalluser()
  }
  
  register(){
    let datastore = {
      "name":this.name,
      "lastname":this.lastname,
      "phone":this.phone,
      "gmail" :this.gmail
      

    }
  
    this.service.createuser(datastore).subscribe((resp:any)=>{
      console.log(resp);
      alert("Student Registered Successfully") 
      
    })
   
    
  }

  getalluser(){
    this.service.getusers().subscribe((getdata:any)=>{
      console.log(getdata)
      this.useraray = getdata
    })
  }


    
    
     
   
 
  setdata(data:any){
    this.name=data.name,
    this.phone=data.phone,
    this.lastname=data.lastname,
    this.gmail=data.gmail
    this.userids = data._id
  }
  updaterecord(){ 
    let updatebody = {
      "name":this.name,
      "phone":this.phone,
      "lastname":this.lastname,
      "gmail":this.gmail
    }
    this.service.updateuser(this.userids,updatebody).subscribe((updateresult:any)=>{
      console.log("userupdate========", updateresult, updatebody)
      alert("users updatesucessfull")
      this.service.getusers() 
    })
  }
  setdelete(data:any, dataany:any){
    this.service.deleteuser(data._id,dataany).subscribe((deleteuser:any)=>{
      console.log(deleteuser )
      alert("delete Users sccessfull")
      this.service.getusers()

    })
  }


  save(){
    if(this.userids == ''){
      this.register();
    }
    else{
      this.updaterecord()
    }
  }

}

// this.http.post("http://localhost:3500/v1",datastore).subscribe((result:any)=>{
    //   console.log(result)
    //   alert("Student Registered Successfully")
      


    // })
