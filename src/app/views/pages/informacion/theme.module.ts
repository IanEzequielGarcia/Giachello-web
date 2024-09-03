import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule, ButtonModule, FormModule, AvatarModule, ButtonGroupModule, ProgressModule, TableModule, CarouselModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { InformacionComponent } from './informacion.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { ExamComponent } from '../exam/exam.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WhatsAppFloatingComponent } from '../whats-app-floating/whats-app-floating.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Page404Component } from '../page404/page404.component';
import { Page500Component } from '../page500/page500.component';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { ExamplePdfViewerComponent } from '../../../example-pdf-viewer/example-pdf-viewer.component';
import { NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    FormsModule,
    ButtonModule,
    FormModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonGroupModule,
    CarouselModule,
    ExamplePdfViewerComponent
  ],
  declarations: [
    InformacionComponent,
    TypographyComponent,
    ExamComponent,
    WhatsAppFloatingComponent,
    DashboardComponent,
    Page404Component,
    Page500Component
  ],providers:[
    NgxExtendedPdfViewerService
  ]
})
export class ThemeModule {
}
