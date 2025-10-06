import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experience } from './experience.interface';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {
    private _http = inject(HttpClient);

    private _experienceSubject = new BehaviorSubject<Experience[]>([]);
    experience$ = this._experienceSubject.asObservable();

    fetchExperiences(): Observable<Experience[]> {
        return this._http
            .get<{ data: Experience[]; message: string }>('http://localhost:3000/api/v1/experience')
            .pipe(map(response => response.data));
    }
}
