import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentProjectionComponent } from './content-projection.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { CpCardComponent } from './cp-card/cp-card.component';

@NgModule({
  declarations: [ContentProjectionComponent, ContentChildComponent, CpCardComponent],
  imports: [
    CommonModule
  ]
})
export class ContentProjectionModule { }
