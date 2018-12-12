import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSheetSearchComponent } from './jobSheet-search.component';

describe('JobSheetSearchComponent', () => {
    let component: JobSheetSearchComponent;
    let fixture: ComponentFixture<JobSheetSearchComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [JobSheetSearchComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(JobSheetSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
