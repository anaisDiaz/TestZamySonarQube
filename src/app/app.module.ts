import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventRegistrationComponent } from './events/event-registration/event-registration.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirebaseService } from './services/firebase.service';
import { UserService } from './services/user.service';
import { EventService } from './services/event.service';
import { AttendanceListComponent } from './attendance/attendance-list/attendance-list.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AttendanceService } from './services/attendance.service';

const firebaseConfig = {
  apiKey: 'AIzaSyCOu0Lwpp5d_eRnIyJHcVypT2E-UD9HF8A',
  authDomain: 'zamy-d9d98.firebaseapp.com',
  databaseURL: 'https://zamy-d9d98.firebaseio.com',
  projectId: 'zamy-d9d98',
  storageBucket: 'zamy-d9d98.appspot.com',
  messagingSenderId: '859727227209'
};

@NgModule({
  declarations: [
    AppComponent,
    EventRegistrationComponent,
    EventListComponent,
    EventDetailComponent,
    AttendanceListComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    FirebaseService,
    UserService,
    EventService,
    AttendanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
