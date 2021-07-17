import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { RestContactService } from '../../services/restContact/rest-contact.service';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-save-contact',
  templateUrl: './save-contact.component.html',
  styleUrls: ['./save-contact.component.css']
})
export class SaveContactComponent implements OnInit {
  contact:Contact;
  public token;
  public user;

  constructor(private restContact:RestContactService, private restUser:RestUserService) {
    this.contact = new Contact('','','',null);
   }

  ngOnInit(): void {
    this.user = this.restUser.getUser();
    this.token = this.restUser.getToken();
  }

  onSubmit(form){
    this.restContact.saveContact(this.user._id, this.contact).subscribe((res:any)=>{
      if(res.contactPush){
        alert(res.message)
        form.reset();
        delete res.contactPush.password;
        this.user = res.contactPush;
        localStorage.setItem('user', JSON.stringify(this.user))
      }else{
        alert(res.message)
      }
    },
    error=> alert(error.error.message))
  }
}
