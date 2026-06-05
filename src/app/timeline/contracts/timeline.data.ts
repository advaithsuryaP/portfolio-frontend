export type TimelineCategory = 'Education' | 'Employment' | 'Project';

export interface TimelineEntity {
    id: string;
    title: string;
    role: string;
    category: TimelineCategory;
    icon?: string;
    location?: string;
    startYear: number;
    /** 0-indexed month (0 = January). */
    startMonth: number;
    /** `null` when the entity is ongoing. */
    endYear: number | null;
    endMonth: number | null;
    description?: string[];
}

export const TIMELINE_MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

/** Earliest milestone in the portfolio (Bachelor's start, Jun 2014). */
export const TIMELINE_START = { year: 2014, month: 5 };

export const TIMELINE_ENTITIES: TimelineEntity[] = [
    {
        id: 'quantellia',
        title: 'Quantellia LLC',
        role: 'Senior Software Engineer',
        category: 'Employment',
        icon: 'images/quantellia.svg',
        location: 'Remote',
        startYear: 2025,
        startMonth: 5,
        endYear: null,
        endMonth: null,
        description: [
            'Led frontend development for an AI-driven decision intelligence platform built on World Modeler APIs.',
            'Developed modular UI components and integrated LLM APIs for real-time data visualizations.',
            'Architected authentication and authorization with dynamic, tenant-based roles.'
        ]
    },
    {
        id: 'ardent',
        title: 'Ardent Privacy Inc.',
        role: 'Software Engineer',
        category: 'Employment',
        icon: 'images/ardent.svg',
        location: 'Baltimore, Maryland, USA',
        startYear: 2024,
        startMonth: 0,
        endYear: 2025,
        endMonth: 5,
        description: [
            'Built a multi-tenant privacy automation platform from the ground up across cloud and on-prem.',
            'Developed authentication, role-based access, approval workflows, notifications, and i18n support.',
            'Designed RESTful APIs and deployment workflows using Docker, Jenkins, and AWS.'
        ]
    },
    {
        id: 'ixfi',
        title: 'Blockchain Solution Network (IXFI Group Company)',
        role: 'Software Engineer',
        category: 'Employment',
        icon: 'images/ixfi.svg',
        location: 'Chennai, Tamil Nadu, India',
        startYear: 2022,
        startMonth: 0,
        endYear: 2023,
        endMonth: 7,
        description: [
            'Developed core trading and wallet systems supporting 450K+ global users with sub-second latency.',
            'Enhanced performance by 40% through Redis caching, Angular SSR, and CDN optimization.',
            'Created reusable Angular libraries, reducing development time by 25%.'
        ]
    },
    {
        id: 'infosys',
        title: 'Infosys Limited',
        role: 'Senior Systems Engineer',
        category: 'Employment',
        icon: 'images/infosys.svg',
        location: 'Chennai, Tamil Nadu, India',
        startYear: 2018,
        startMonth: 0,
        endYear: 2021,
        endMonth: 11,
        description: [
            'Contributed to frontend development for high-profile clients using Angular and NgRx.',
            'Enhanced multi-tab performance by 20% and maintained a shared design system across modules.'
        ]
    },
    {
        id: 'umbc',
        title: 'University of Maryland, Baltimore County',
        role: 'Master of Science in Software Engineering',
        category: 'Education',
        icon: 'images/umbc.svg',
        location: 'Baltimore, Maryland, USA',
        startYear: 2023,
        startMonth: 7,
        endYear: 2025,
        endMonth: 4,
        description: [
            'Graduate Assistant — assisted faculty in teaching and grading, contributing to improved learning outcomes.'
        ]
    },
    {
        id: 'srm',
        title: 'SRM Institute of Science and Technology',
        role: 'Bachelor of Technology in Information Technology',
        category: 'Education',
        icon: 'images/srm.webp',
        location: 'Chennai, Tamil Nadu, India',
        startYear: 2014,
        startMonth: 5,
        endYear: 2018,
        endMonth: 4
    }
];
