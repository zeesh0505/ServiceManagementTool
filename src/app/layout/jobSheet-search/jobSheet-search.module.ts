import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobSheetSearchRoutingModule } from './jobSheet-search-routing.module';
import { JobSheetSearchComponent } from './jobSheet-search.component';

@NgModule({
    imports: [CommonModule, JobSheetSearchRoutingModule],
    declarations: [JobSheetSearchComponent]
})
export class JobSheetSearchModule {}
