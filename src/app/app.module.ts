import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { MyAdComponent } from './my-ad/my-ad.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes =[
    { path: 'service', component: ServiceComponent},
    { path: 'myad', component: MyAdComponent},
    { path: 'admin', component: AdminComponent},
];

@NgModule({

  declarations: [
    AppComponent,
    ServiceComponent,
    MyAdComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
