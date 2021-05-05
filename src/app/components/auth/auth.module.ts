import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {MaterialModule} from 'src/app/material.module';
import {LoginComponent} from './login/login.component';
import {AuthEffects} from './state/auth.effects';
import {SignupComponent} from './signup/signup.component';


const routes: Routes = [
  {
    path: '', children: [
      {path: 'login', component: LoginComponent},
      {path: 'sighup', component: SignupComponent}
    ]
  },
];

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([]),
  ],
})
export class AuthModule {
}
