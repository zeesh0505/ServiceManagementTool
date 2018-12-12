import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobSheetSearchComponent } from './jobSheet-search.component';

const routes: Routes = [
    {
        path: '',
        component: JobSheetSearchComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobSheetSearchRoutingModule {}
