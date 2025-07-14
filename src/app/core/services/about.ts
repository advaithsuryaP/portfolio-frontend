import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Education } from '../models/education.model';

@Injectable({
    providedIn: 'root'
})
export class About {
    private _education: Education[] = [
        {
            institution: 'University of Maryland, Baltimore County',
            degree: 'Master of Science in Software Engineering',
            fromDate: 'Aug 2023',
            toDate: 'May 2025',
            logo: '/images/brands/placeholder.svg'
        },
        {
            institution: 'SRM Institute of Science and Technology',
            degree: 'Bachelor of Technology in Computer Science and Engineering',
            fromDate: 'Jun 2014',
            toDate: 'May 2018',
            logo: '/images/brands/srm.png'
        }
    ];
    private _education$ = new BehaviorSubject<Education[]>(this._education);
    education$ = this._education$.asObservable();
}
