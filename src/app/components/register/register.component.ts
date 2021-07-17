import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../transitions/transitions';
import { User } from '../../models/user';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [fadeIn],
})
export class RegisterComponent implements OnInit {
  public user:User;
  message;
  username:string;

  constructor(private restUser:RestUserService) {
    this.user = new User('', '', '', '', '', '', '', '', 'ROLE_USER', []);
   }

  ngOnInit(): void {
  }

  onSubmit(register){
    this.restUser.saveUser(this.user).subscribe((res:any)=>{
      this.message = res.message;
      if(res.userSaved){
        //console.log(res.userSaved)
       // this.username = res.userSaved[0].username;
        alert(this.message);
        register.reset();
      }else{
        alert(this.message);
      }
    })

    error => console.log(<any>error);
    /*
    console.log(this.user);
    console.log(this.restUser.testService());
    */
  }

}
