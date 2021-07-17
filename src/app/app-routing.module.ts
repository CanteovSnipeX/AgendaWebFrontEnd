import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContactsComponent } from './components/home-contacts/home-contacts.component';
import { HomeComponent } from './components/home/home.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SaveContactComponent } from './components/save-contact/save-contact.component';
import { SaveUserComponent } from './components/save-user/save-user.component';
import { UserComponent } from './components/user/user.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  //esta primera path, es de 1 solo uso
  {path: '', component: HomeComponent}, //path: '' = va a ser lo primero en mostrarse
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //segunda forma de hacerlo
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'homeContacts', component: HomeContactsComponent},
  {path: 'saveContact', component: SaveContactComponent},
  {path: 'user', component: UserComponent},
  {path: 'saveUser', canActivate: [AdminGuard], component: SaveUserComponent},
  {path: 'listUsers', canActivate:[AdminGuard], component: ListUsersComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
