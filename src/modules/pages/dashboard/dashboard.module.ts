import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routing';
import { ToolbarModule } from '../../components/toolbar/toolbar.module';
import { ExampleModule } from 'src/modules/content/example/example.module';



@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports     : [
        RouterModule.forChild(dashboardRoutes),
        CommonModule,

        ToolbarModule,
        ExampleModule

    ]
})

export class DashboardModule{}