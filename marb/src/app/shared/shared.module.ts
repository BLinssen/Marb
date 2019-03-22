import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
    imports: [
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatGridListModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatTableModule,
        MatListModule,
        MatCardModule,
        MatTooltipModule,
        MatInputModule,
        MatSnackBarModule,
    ],
    exports: [
        MatToolbarModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatGridListModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatTableModule,
        MatListModule,
        MatCardModule,
        MatTooltipModule,
        MatInputModule,
        MatSnackBarModule,
    ]
})
export class SharedModule {}