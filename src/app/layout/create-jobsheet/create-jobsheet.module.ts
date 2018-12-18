import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateJobsheetRoutingModule } from './create-jobsheet-routing.module';
import { CreateJobsheetComponent } from './create-jobsheet.component';

@NgModule({
    imports: [CommonModule, CreateJobsheetRoutingModule],
    declarations: [CreateJobsheetComponent]
})
export class CreateJobsheetModule {}
