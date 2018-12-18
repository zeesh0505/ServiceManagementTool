import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobsheetComponent } from './create-jobsheet.component';

describe('CreateJobsheetComponent', () => {
    let component: CreateJobsheetComponent;
    let fixture: ComponentFixture<CreateJobsheetComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [CreateJobsheetComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateJobsheetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
