import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ImageFormComponent } from './image-form/image-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditImageComponent } from './edit-image/edit-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageCardComponent,
    ImageFormComponent,
    EditImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
