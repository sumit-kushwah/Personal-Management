import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: [HeaderComponent],
    providers: [],
    imports: [
        NgbModule
    ],
    exports: [HeaderComponent],
    bootstrap: [HeaderComponent]
  })
export class HeaderModule { }