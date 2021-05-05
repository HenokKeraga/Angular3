import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {MaterialModule} from 'src/app/material.module';
import {AddpostComponent} from './addpost/addpost.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {PostComponent} from './post.component';
import {postReducer} from './state/post.reducer';
import {EffectsModule} from '@ngrx/effects';
import {PostEffects} from './state/post.effects';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      {path: 'add', component: AddpostComponent},
      {path: 'edit/:id', component: EditPostComponent},
    ],
  },
];

@NgModule({
  declarations: [PostComponent, AddpostComponent, EditPostComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    EffectsModule.forFeature([PostEffects]),
    StoreModule.forFeature('post', postReducer),
    HttpClientModule
  ],
})
export class PostModule {
}
