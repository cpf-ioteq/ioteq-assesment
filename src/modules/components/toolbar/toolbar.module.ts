import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'


import { ToolbarComponent } from './toolbar.component';


@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        ReactiveFormsModule,

        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,

        CommonModule,
        RouterModule,
    ],
    exports: [
        ToolbarComponent
    ]
})

export class ToolbarModule{}