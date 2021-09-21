export interface LinkSubmission {
    url: string;
    description: string;
}

export interface Link extends LinkSubmission {
    id: string;
}
