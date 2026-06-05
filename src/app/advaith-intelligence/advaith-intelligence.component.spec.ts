import { ComponentFixture, TestBed } from '@angular/core/testing';

import AdvaithIntelligenceComponent from './advaith-intelligence.component';

describe('AdvaithIntelligenceComponent', () => {
    let component: AdvaithIntelligenceComponent;
    let fixture: ComponentFixture<AdvaithIntelligenceComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AdvaithIntelligenceComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AdvaithIntelligenceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
