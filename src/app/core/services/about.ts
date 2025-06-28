import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { BehaviorSubject } from 'rxjs';
import { Education } from '../models/education.model';

@Injectable({
    providedIn: 'root'
})
export class About {
    private _experiences: Experience[] = [
        {
            company: 'Ardent Privacy',
            position: 'Software Engineer',
            fromDate: 'Jan 2024',
            toDate: 'June 2025',
            logo: '/images/brands/ardent-privacy.jpg',
            description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.']
        },
        {
            company: 'Blockchain Solution Network (IXFI Group)',
            position: 'Software Engineer',
            fromDate: 'Jan 2022',
            toDate: 'Aug 2023',
            logo: '/images/brands/ixfi.svg',
            description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.']
        },
        {
            company: 'Infosys Limited',
            position: 'Software Engineer',
            fromDate: 'Jan 2018',
            toDate: 'Dec 2021',
            logo: '/images/brands/infosys.svg',
            description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.']
        }
    ];
    private _experiences$ = new BehaviorSubject<Experience[]>(this._experiences);
    experiences$ = this._experiences$.asObservable();

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
