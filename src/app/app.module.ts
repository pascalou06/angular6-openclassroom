import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AppareilComponent } from './appareil/appareil.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import {UserService} from './services/user.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';

import { Routes, RouterModule } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

import {AuthGuard} from '../app/services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard],component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,

    AppareilComponent,
    SingleAppareilComponent,
    AuthComponent,

    AppareilViewComponent,

    FourOhFourComponent,

    EditAppareilComponent,

    UserListComponent,

    NewUserComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
