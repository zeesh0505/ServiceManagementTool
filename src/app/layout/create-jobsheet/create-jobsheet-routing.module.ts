import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateJobsheetComponent } from './create-jobsheet.component';

const routes: Routes = [
    {
        path: '',
        component: CreateJobsheetComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateJobsheetRoutingModule {}
