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
import { BarChartComponent } from './components/graphs/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/graphs/line-chart/line-chart.component';
import { SvgTestComponent } from './tmp/svg-test/svg-test.component';
import { TreemapComponent } from './components/graphs/treemap/treemap.component';
import { ScatterPlotComponent } from './components/graphs/scatter-plot/scatter-plot.component';
import { PieChartComponent } from './components/graphs/pie-chart/pie-chart.component';
import { ChoroplethMapComponent } from './components/graphs/choropleth-map/choropleth-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MainColorSelectionComponent,
    TestComponentComponent,
    VizContainerComponent,
    BarChartComponent,
    LineChartComponent,
    SvgTestComponent,
    TreemapComponent,
    ScatterPlotComponent,
    PieChartComponent,
    ChoroplethMapComponent
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
