import Cliente from 'src/app/models/clients';
import Task from './task';

export default class Projeto {
    title: string;
    tasks: Task[];
    completed: boolean;
    status: number;
    _id: string;
    description: string;
    cliente: string | Cliente;
    createdAt: Date;
    dateFinalization: Date
}