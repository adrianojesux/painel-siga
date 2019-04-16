import User from './user';
import Projeto from './projeto';

export default class Task{
    title: string;
    project: string | Projeto;
    details: string;
    estimatedHours: number;
    hoursUsed: number;
    completionForecast: Date;
    dateConclusion: Date;
    completed: boolean;
    assignedTo: string | User;
    createdAt: Date;
    comments: string;
}