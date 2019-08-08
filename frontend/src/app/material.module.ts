import { NgModule } from '@angular/core';

// material angular
import {
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatBadgeModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatExpansionModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatBadgeModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatExpansionModule
    ]
})
export class MaterialModule { }