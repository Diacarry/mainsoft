import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Routes, RouterModule } from '@angular/router';

import { IndexPageComponent } from './Pages/index-page/index-page.component';

import { NavComponent } from './Componets/General/nav/nav.component';
import { FooterComponent } from './Componets/General/footer/footer.component';
import { NavbarComponent } from './Componets/General/navbar/navbar.component';
import { FormInteresedComponent } from './Componets/Forms/form-interesed/form-interesed.component';
import { FormPersonComponent } from './Componets/Forms/form-person/form-person.component';

const appRoutes: Routes = [
  {path: '', component: IndexPageComponent},
  {path: 'index', component: IndexPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    NavbarComponent,
    FormInteresedComponent,
    FormPersonComponent,
    IndexPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
