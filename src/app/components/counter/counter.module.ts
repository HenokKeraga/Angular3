import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { MaterialModule } from "src/app/material.module";
import { CounterComponent } from "./counter.component";
import { counterReducer } from "./counter.reducer";
import { CustomCounterComponent } from "./custom-counter/custom-counter.component";

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  declarations: [CounterComponent, CustomCounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forFeature('counter',counterReducer)
  ],
})
export class CounterModule {}