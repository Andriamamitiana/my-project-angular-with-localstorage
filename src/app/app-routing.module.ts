import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';

import { DeviceComponent } from './device/device.component';
import { EnfantComponent } from './enfant/enfant.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';

import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
 // {path:"formulaire", component:HomeComponent},
  {path:"list", component:ListComponent},
  {path:"device", component:DeviceComponent},
  {path: "bind", component: BindingComponent},
  {path: "", component: ListComponent},
  {path: "rxjs", component: RxjsComponent},
  {path: "enfant", component: EnfantComponent},
  {path: "parent", component: ParentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
