import { StackItem } from './stack-item.model';

export interface Project {
    title: string;
    summary: string;
    technicalFocus: string;
    description: string;
    imageUrl: string;
    technologies: StackItem[];
    githubUrl: string;
    demoUrl?: string;
}