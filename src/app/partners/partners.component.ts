import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  group_name:string;
  users:any;
  userslist:any;
  searchText:any;
  partners: any;
  inter;

  constructor(
    private service: MyserviceService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.service.getUser().subscribe((res:any)=>{
      this.userslist = res.data;
    });
    this.getpartner();
    this.inter = setInterval(() => {
      this.getpartner();
    }, 2000)

  }

  getpartner(){
    this.service.getPartner().subscribe((res:any)=>{
      this.partners = res.data;
      // this.partners.filter(r => r.users);
      for(let i = 0;i<this.partners.length;i++){
        for(let j=0; j<this.partners[i].users.length;j++){
          for(let k=0; k<this.userslist.length;k++){
            if(this.partners[i].users[j] == this.userslist[k].name){
              let count = parseInt(this.userslist[k].counter);
              let partner_count_value = parseInt(this.partners[i].partners_counter);
              partner_count_value += count;
              this.partners[i].partners_counter = partner_count_value ; 
            }
          }
        }
      }
      // console.log(this.partners);
    });
    clearInterval(this.inter);
  }

  onSave(){
    if(!this.group_name){
      return this.snackBar.open("Please Enter Group Name !", "", {duration: 4000});
    }
    if(!this.users){
      return this.snackBar.open("Please decide Partner !", "", {duration: 4000});
    }
    let data ={
      group_name: this.group_name,
      users: this.users
    };
    this.group_name = "";
    this.users = "";
    this.service.partnerInsert(data).subscribe((res:any)=>{
      this.users = res.data;
      this.getpartner();
    });

  }

  onDelete(id){
    this.service.deletePartner(id).subscribe((res:any)=>{
      this.getpartner();
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.inter);
    
  }
  

}
