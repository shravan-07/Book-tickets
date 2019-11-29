import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from '../app/user/user.component';
import { BussearchresultComponent } from './user/bussearchresult/bussearchresult.component';
import { FooterComponent } from './user/footer/footer.component';
import { HeaderComponent } from './user/header/header.component';
import { ModelsComponent } from './user/models/models.component';
import { PrintComponent } from './user/print/print.component';
import { SelectbusComponent } from './user/selectbus/selectbus.component';
import { SelectseatComponent } from './user/selectseat/selectseat.component';
import { UserformComponent } from './user/userform/userform.component';

import { BookingService } from './user/services/booking.service';
import { UserService } from './user/services/user.service';
import { SelectBusService } from './user/services/select-bus.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const userRoute = [
  // {path:'',component:SelectseatComponent},
  { path: '', component: SelectbusComponent },
  { path: 'search', component: BussearchresultComponent },
  { path: 'user-form', component: UserformComponent },
  { path: 'print', component: PrintComponent },
  { path: 'selectseat', component: SelectseatComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BussearchresultComponent,
    FooterComponent,
    HeaderComponent,
    ModelsComponent,
    PrintComponent,
    SelectbusComponent,
    SelectseatComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(userRoute)
  ],
  providers: [BookingService, UserService, SelectBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
