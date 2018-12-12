import { JobSheetSearchModule } from './jobSheet-search.module';

describe('JobSheetSearchModule', () => {
    let jobSheetSearchModule: JobSheetSearchModule;

    beforeEach(() => {
        jobSheetSearchModule = new JobSheetSearchModule();
    });

    it('should create an instance', () => {
        expect(JobSheetSearchModule).toBeTruthy();
    });
});
