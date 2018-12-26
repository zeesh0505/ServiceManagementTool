import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobsheetInfoComponent } from './jobsheet-info.component';

const routes: Routes = [
    {
        path: '',
        component: JobsheetInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JobsheetInfoRoutingModule {}
