import { StackCategory } from '../models/stack-category.model';

export const STACK_CONFIG: StackCategory[] = [
    {
        title: 'Frontend',
        items: [
            {
                name: 'Angular',
                icon: 'angular'
            },
            {
                name: 'HTML',
                icon: 'html'
            },
            {
                name: 'CSS',
                icon: 'css'
            },
            {
                name: 'TypeScript',
                icon: 'typescript'
            }
        ]
    },
    {
        title: 'Backend',
        items: [
            {
                name: 'Java',
                icon: 'java'
            },
            {
                name: 'Python',
                icon: 'python'
            },
            {
                name: 'PostgreSQL',
                icon: 'postgresql'
            }
        ]
    },
    {
        title: 'Herramientas',
        items: [
            {
                name: 'Git',
                icon: 'git'
            },
            {
                name: 'GitHub',
                icon: 'github'
            },
            {
                name: 'Postman',
                icon: 'postman'
            }
        ]
    },
    {
        title: 'En aprendizaje',
        items: [
            {
                name: 'Docker',
                icon: 'docker'
            },
            {
                name: 'Spring',
                icon: 'spring'
            }
        ]
    }
];