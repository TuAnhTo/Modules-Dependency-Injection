import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageGalleryModule } from './image-gallery/image-gallery.module';
import { GalleryConfig } from './image-gallery/token';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { ImgSliderModule } from './img-slider/img-slider.module';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ImageGalleryModule,
    AppRoutingModule,
    ContentProjectionModule,
    ImgSliderModule
  ],
  providers: [
    {provide: GalleryConfig, useValue: 2},
    {provide: AuthService, useClass: AuthService},
    {provide: 'API_ENDPOINT', useValue: 'http://api.example.com'},
    {provide: 'API_URL', useExisting: 'API_ENDPOINT'},
    {
      provide: 'some-token',
      useFactory() {
        return Math.random();
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
