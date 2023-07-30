import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { InformacionComponent } from './informacion.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { ExamComponent } from '../pages/exam/exam.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule
    
  ],
  declarations: [
    InformacionComponent,
    TypographyComponent,
    ExamComponent
  ]
})
export class ThemeModule {
}
