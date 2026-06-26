/** A point on the timeline. `month` is 0-indexed (0 = January). */
export interface YearMonth {
    year: number;
    month: number;
}

export type PeriodCategory = 'Employment' | 'Education';
export type MomentCategory = 'Certification' | 'Achievement' | 'Project';
export type TimelineCategory = PeriodCategory | MomentCategory;

/** Employment and education — start/end generate moment labels on the timeline. */
export interface TimelinePeriod {
    id: string;
    title: string;
    role: string;
    category: PeriodCategory;
    start: YearMonth;
    end: YearMonth | null;
}

/** Single point-in-time — certifications, achievements, projects. */
export interface TimelineMoment {
    id: string;
    title: string;
    category: MomentCategory;
    date: YearMonth;
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

export const TIMELINE_START: YearMonth = { year: 2014, month: 5 };

export const CATEGORY_COLORS: Record<TimelineCategory, string> = {
    Employment: '#0284c7',
    Education: '#059669',
    Certification: '#d97706',
    Achievement: '#7c3aed',
    Project: '#db2777'
};

export const TIMELINE_PERIODS: TimelinePeriod[] = [
    {
        id: 'quantellia',
        title: 'Quantellia LLC',
        role: 'Senior Software Engineer',
        category: 'Employment',
        start: { year: 2025, month: 5 },
        end: null
    },
    {
        id: 'ardent',
        title: 'Ardent Privacy Inc.',
        role: 'Graduate Software Engineer Intern',
        category: 'Employment',
        start: { year: 2024, month: 0 },
        end: { year: 2025, month: 5 }
    },
    {
        id: 'ixfi',
        title: 'Blockchain Solution Network (IXFI Group Company)',
        role: 'Software Engineer',
        category: 'Employment',
        start: { year: 2022, month: 0 },
        end: { year: 2023, month: 7 }
    },
    {
        id: 'infosys',
        title: 'Infosys Limited',
        role: 'Senior Systems Engineer',
        category: 'Employment',
        start: { year: 2018, month: 0 },
        end: { year: 2021, month: 11 }
    },
    {
        id: 'umbc',
        title: 'University of Maryland, Baltimore County',
        role: 'Master of Science in Software Engineering',
        category: 'Education',
        start: { year: 2023, month: 7 },
        end: { year: 2025, month: 4 }
    },
    {
        id: 'srm',
        title: 'SRM Institute of Science and Technology',
        role: 'Bachelor of Technology in Information Technology',
        category: 'Education',
        start: { year: 2014, month: 5 },
        end: { year: 2018, month: 4 }
    }
];

export const TIMELINE_MOMENTS: TimelineMoment[] = [
    {
        id: 'aws-saa',
        title: 'AWS Certified Solutions Architect – Associate',
        category: 'Certification',
        date: { year: 2022, month: 5 }
    },
    {
        id: 'umbc-hackathon',
        title: 'Winner, UMBC Graduate Hackathon',
        category: 'Achievement',
        date: { year: 2024, month: 9 }
    }
];
