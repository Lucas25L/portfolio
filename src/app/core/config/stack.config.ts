import { StackCategory } from '../models/stack-category.model';
import { STACK_ITEMS } from './stack-items.config';

export const STACK_CONFIG: StackCategory[] = [
    {
        title: 'Frontend',
        items: [
            STACK_ITEMS.angular,
            STACK_ITEMS.html,
            STACK_ITEMS.css,
            STACK_ITEMS.typescript
        ]
    },
    {
        title: 'Backend',
        items: [
            STACK_ITEMS.java,
            STACK_ITEMS.python,
            STACK_ITEMS.postgresql
        ]
    },
    {
        title: 'Herramientas',
        items: [
            STACK_ITEMS.git,
            STACK_ITEMS.github,
            STACK_ITEMS.postman
        ]
    },
    {
        title: 'En aprendizaje',
        items: [
            STACK_ITEMS.docker,
            STACK_ITEMS.sprint
        ]
    }
];