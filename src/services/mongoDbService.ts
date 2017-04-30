import { mongoose } from 'mongoose';

import { ITask } from '../models/taskType';
import Task from '../models/taskType';
import { mockTask } from './mockTask';

export class MongoDbService {

    static async getTaskById(taskId: string): Promise<ITask> {
        return mockTask;
    }

    static async getTasks(): Promise<ITask> {
        return mockTask;
        // return Task.find({}, function (err, task) {
        //     if (err) {
        //         console.log("error!");
        //         // return mockTask;
        //     }
        //     return task;
        // });
    }
}
