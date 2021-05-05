import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'counter', loadChildren: () => import ( '../app/components/counter/counter.module' ).then(m => m.CounterModule)},
  {path: 'post', loadChildren: () => import('../app/components/post/post/post.module').then(m => m.PostModule)},
  {path: 'auth', loadChildren: () => import('../app/components/auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
