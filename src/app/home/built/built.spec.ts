import { ComponentFixture, TestBed } from '@angular/core/testing';

import Built from './built';

describe('Built', () => {
    let component: Built;
    let fixture: ComponentFixture<Built>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Built],
        }).compileComponents();

        fixture = TestBed.createComponent(Built);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
