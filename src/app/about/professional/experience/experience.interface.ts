export interface Experience {
    id: string;
    title: string;
    toDate?: string;
    fromDate: string;
    company: string;
    location: string;
    jobType?: string;
    imageUrl?: string;
    isCurrent: boolean;
    accomplishments: string[];
}

export interface CreateExperiencePayload extends Omit<Experience, 'id'> {}

export interface UpdateExperiencePayload extends Omit<Experience, 'id'> {}

export interface DeleteExperiencePayload {
    id: string;
}
