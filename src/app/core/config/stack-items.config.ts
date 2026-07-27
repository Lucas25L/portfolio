import { StackItem } from '../models/stack-item.model';

export const STACK_ITEMS = {
    angular: {
        name: 'Angular',
        icon: 'assets/icons/angular.svg'
    },
    html: {
        name: 'HTML',
        icon: 'assets/icons/html.svg'
    },
    css: {
        name: 'CSS',
        icon: 'assets/icons/css.svg'
    },
    typescript: {
        name: 'TypeScript',
        icon: 'assets/icons/typescript.svg'
    },
    java: {
        name: 'Java',
        icon: 'assets/icons/java.svg'
    },
    python: {
        name: 'Python',
        icon: 'assets/icons/python.svg'
    },
    postgresql: {
        name: 'PostgreSQL',
        icon: 'assets/icons/postgresql.svg'
    },
    djangorest: {
        name: 'DjangoRest',
        icon: 'assets/icons/djangorest.svg'
    },
    firebase: {
        name: 'Firebase',
        icon: 'assets/icons/firebase.svg'
    },
    arduino: {
        name: 'Arduino',
        icon: 'assets/icons/arduino.svg'
    },
    git: {
        name: 'Git',
        icon: 'assets/icons/git.svg'
    },
    github: {
        name: 'GitHub',
        icon: 'assets/icons/github.svg'
    },
    postman: {
        name: 'Postman',
        icon: 'assets/icons/postman.svg'
    },
    sprint: {
        name: 'Sprint',
        icon: 'assets/icons/sprint.svg'
    },
    docker: {
        name: 'Docker',
        icon: 'assets/icons/docker.svg'
    }
} satisfies Record<string, StackItem>;