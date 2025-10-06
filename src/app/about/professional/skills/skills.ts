import { Component } from '@angular/core';
import { Skill } from './skill.interface';
import { SkillPill } from './skill-pill/skill-pill';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.html',
    styleUrl: './skills.scss',
    imports: [SkillPill]
})
export class Skills {
    languages: Skill[] = [
        { name: 'TypeScript', icon: 'typescript.svg', isPrimary: false },
        { name: 'JavaScript', icon: 'javascript.svg', isPrimary: true },
        { name: 'Python', icon: 'python.svg', isPrimary: false },
        { name: 'C#', icon: 'csharp.svg', isPrimary: false },
        { name: 'Java', icon: 'java.svg', isPrimary: false }
    ];
    frontend: Skill[] = [
        { name: 'Angular', icon: 'angular.svg', isPrimary: true },
        { name: 'HTML', icon: 'html.svg', isPrimary: false },
        { name: 'CSS', icon: 'css.svg', isPrimary: false },
        { name: 'Sass', icon: 'sass.svg', isPrimary: false },
        { name: 'Tailwind', icon: 'tailwindcss.svg', isPrimary: false },
        { name: 'Material UI', icon: 'materialui.svg', isPrimary: false },
        { name: 'Bootstrap', icon: 'bootstrap.svg', isPrimary: false }
    ];
    backend: Skill[] = [
        { name: 'Node.js', icon: 'nodejs.svg', isPrimary: true },
        { name: 'Express.js', icon: 'expressjs.svg', isPrimary: false },
        { name: 'Nest.js', icon: 'nestjs.svg', isPrimary: false },
        { name: '.NET Core', icon: 'dotnet.svg', isPrimary: false }
    ];
    libraries: Skill[] = [
        { name: 'React', icon: 'react.svg', isPrimary: false },
        { name: 'RxJS', icon: 'rxjs.svg', isPrimary: false },
        { name: 'NgRx', icon: 'ngrx.svg', isPrimary: false },
        { name: 'Socket.IO', icon: 'socketio.svg', isPrimary: false }
    ];
    databases: Skill[] = [
        { name: 'PostgreSQL', icon: 'postgresql.svg', isPrimary: true },
        { name: 'MongoDB', icon: 'mongodb.svg', isPrimary: false },
        { name: 'CockroachDB', icon: 'cockroachdb.svg', isPrimary: false },
        { name: 'Redis', icon: 'redis.svg', isPrimary: false }
    ];
    cloud: Skill[] = [
        { name: 'AWS', icon: 'aws.svg', isPrimary: true },
        { name: 'Docker', icon: 'docker.svg', isPrimary: false },
        { name: 'Kubernetes', icon: 'kubernetes.svg', isPrimary: false },
        { name: 'Jenkins', icon: 'jenkins.svg', isPrimary: false }
    ];
    distributed: Skill[] = [
        { name: 'Kafka', icon: 'kafka.svg', isPrimary: false },
        { name: 'RabbitMQ', icon: 'rabbitmq.svg', isPrimary: false }
    ];
    ai: Skill[] = [
        { name: 'ChatGPT', icon: 'openai.svg', isPrimary: true },
        { name: 'Gemini', icon: 'gemini.svg', isPrimary: false }
    ];
}
