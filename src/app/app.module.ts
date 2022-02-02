import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainColorSelectionComponent } from './components/main-color-selection/main-color-selection.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { ColourServiceService } from './services/colour-service.service';
import { BarChartComponent } from './components/graphs/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/graphs/line-chart/line-chart.component';
import { TreemapComponent } from './components/graphs/treemap/treemap.component';
import { ScatterPlotComponent } from './components/graphs/scatter-plot/scatter-plot.component';
import { PieChartComponent } from './components/graphs/pie-chart/pie-chart.component';
import { ChoroplethMapComponent } from './components/graphs/choropleth-map/choropleth-map.component';
import { StackedAreaChartComponent } from './components/graphs/stacked-area-chart/stacked-area-chart.component';
import { TintsShadesComponent } from './components/graphs/tints-shades/tints-shades.component';
import { TypographyComponent } from './components/graphs/typography/typography.component';
import { NgbAccordionModule, NgbCollapseModule, NgbModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ImportColorsComponent } from './components/import-colors/import-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    MainColorSelectionComponent,
    BarChartComponent,
    LineChartComponent,
    TreemapComponent,
    ScatterPlotComponent,
    PieChartComponent,
    ChoroplethMapComponent,
    StackedAreaChartComponent,
    TintsShadesComponent,
    TypographyComponent,
    ImportColorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ColorPickerModule,
    NgbAccordionModule,
    NgbPopoverModule,
    NgbCollapseModule,
    NgbModule
  ],
  providers: [ColourServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
