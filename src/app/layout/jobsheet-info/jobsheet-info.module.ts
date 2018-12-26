import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobsheetInfoRoutingModule } from './jobsheet-info-routing.module';
import { JobsheetInfoComponent } from './jobsheet-info.component';

@NgModule({
    imports: [CommonModule, JobsheetInfoRoutingModule, NgbModule],
    declarations: [JobsheetInfoComponent]
})
export class JobsheetInfoModule {}
