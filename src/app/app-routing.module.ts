import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  {path: "", component: MainpageComponent},
  {path: "users/:userIndex/images", component: PicturesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }