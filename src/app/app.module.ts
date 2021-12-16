import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainColorSelectionComponent } from './components/main-color-selection/main-color-selection.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { ColourServiceService } from './services/colour-service.service';
import { VizContainerComponent } from './components/viz-container/viz-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainColorSelectionComponent,
    TestComponentComponent,
    VizContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  providers: [ColourServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
