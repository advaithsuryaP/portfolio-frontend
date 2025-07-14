import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { About } from '../../../core/services/about';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-professional',
    imports: [MatExpansionModule, MatIconModule, AsyncPipe],
    templateUrl: './professional.html',
    styleUrl: './professional.scss'
})
export class Professional {
    private _aboutService = inject(About);

    education$ = this._aboutService.education$;
}
