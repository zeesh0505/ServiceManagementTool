import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateJobsheetRoutingModule } from './create-jobsheet-routing.module';
import { CreateJobsheetComponent } from './create-jobsheet.component';

@NgModule({
    imports: [CommonModule, CreateJobsheetRoutingModule, NgbModule],
    declarations: [CreateJobsheetComponent]
})
export class CreateJobsheetModule {}
