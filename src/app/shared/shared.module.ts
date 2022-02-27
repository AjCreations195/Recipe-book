import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholderDirective } from "./placehoder/placeholder.directive";
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
@NgModule({
    declarations:[
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports:[
        CommonModule,
        MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,

    ],
    exports:[
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
    
    ]
})
export class SharedModule{}