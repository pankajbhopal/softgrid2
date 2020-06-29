import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  searchText:any;
  users: any;
  total_requests: number = 0;
  searchFrom:any;
  searchTo:any;

  constructor(
    private service: MyserviceService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getusers();

  }

  getusers(){
    this.service.getUser().subscribe((res:any)=>{
      this.users = res.data;
      this.total_requests = res.total_count.counter;
    });
  }

  onSave(){
    if(!this.name){
      return this.snackBar.open("Please Enter Name !", "", {duration: 4000});
    }
    let data ={name: this.name};
    this.name = "";
    this.service.userInsert(data).subscribe((res:any)=>{
      this.users = res.data;
      this.getusers();
    });

  }

  onRequest(id){
    this.service.usercounter(id).subscribe((res:any)=>{
      // this.users = res.data;
      this.getusers();
    });
  }

  onDelete(id){
    this.service.deleteUser(id).subscribe((res:any)=>{
      // this.users = res.data;
      this.getusers();
    });
  }
  

}
