import { Component, OnInit } from '@angular/core';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users:[];
  search;

  constructor(private restUser:RestUserService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    this.restUser.getUsers().subscribe((res:any)=>{
      if(res.users){
        this.users = res.users;
        console.log(this.users)
      }else{
        alert(res.message)
      }
    },
    error=> alert(error.error.message));
  }

}
