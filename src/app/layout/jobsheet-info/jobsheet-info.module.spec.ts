import { JobsheetInfoModule } from './jobsheet-info.module';

describe('JobsheetInfoModule', () => {
    let JobsheetInfoModule: JobsheetInfoModule;

    beforeEach(() => {
        JobsheetInfoModule = new JobsheetInfoModule();;
    });

    it('should create an instance', () => {
        expect(JobsheetInfoModule).toBeTruthy();
    });
});
