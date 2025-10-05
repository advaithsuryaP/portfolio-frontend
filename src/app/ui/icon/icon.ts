import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon',
    imports: [NgOptimizedImage],
    template: `<img [alt]="alt" [ngSrc]="src" [width]="width" [height]="height" decoding="async" class="transition" />`
})
export default class Icon {
    @Input({ required: true }) src: string = '';
    @Input({ required: true }) alt: string = '';
    @Input() width: number = 20;
    @Input() height: number = 20;
}
