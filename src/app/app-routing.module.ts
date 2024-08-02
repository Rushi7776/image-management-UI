import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { EditImageComponent } from './edit-image/edit-image.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: EditImageComponent },
  { path: 'newimage', component: ImageFormComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
