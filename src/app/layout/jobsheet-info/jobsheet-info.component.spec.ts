import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsheetInfoComponent } from './jobsheet-info.component';

describe('JobsheetInfoComponent', () => {
    let component: JobsheetInfoComponent;
    let fixture: ComponentFixture<JobsheetInfoComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [JobsheetInfoComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(JobsheetInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
