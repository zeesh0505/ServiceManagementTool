import { CreateJobsheetModule } from './create-jobsheet.module';

describe('BlankPageModule', () => {
    let createJobsheetModule: CreateJobsheetModule;

    beforeEach(() => {
        createJobsheetModule = new CreateJobsheetModule();
    });

    it('should create an instance', () => {
        expect(createJobsheetModule).toBeTruthy();
    });
});
