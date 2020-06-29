import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment as env } from './../environments/environment';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  basepath = env.basepath;

  constructor(private http : HttpClient) { }

  getUser(){
    return this.http.get(this.basepath+"/getuser").map((res:any) => { 
      return res;
      });
  }

  userInsert(data){
    return this.http.post(this.basepath+"/userInsert", data).map((res:any) => { 
      return res;
      });
  }

  deleteUser(id): Observable<any>{
    return this.http.delete(this.basepath+"/userdelete/"+`${id}`).map((res:any) => { 
      return res;
      });
  }

  usercounter(id){
    return this.http.put(this.basepath+"/userCounter/"+`${id}`, 10).map((res:any) => { 
      return res;
      });
  }

  getPartner(){
    return this.http.get(this.basepath+"/getpartner").map((res:any) => { 
      return res;
      });
  }

  partnerInsert(data){
    return this.http.post(this.basepath+"/partnerInsert", data).map((res:any) => { 
      return res;
      });
  }

  deletePartner(id): Observable<any>{
    return this.http.delete(this.basepath+"/partnerdelete/"+`${id}`).map((res:any) => { 
      return res;
      });
  }
  
}
