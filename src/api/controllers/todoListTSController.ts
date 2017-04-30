import { Request, IReply } from 'hapi';
import * as Boom from 'boom';

import { ITask } from '../../models/taskType';
import { MongoDbService } from '../../services/mongoDbService';

export class TodoListTSController {
  // static async getTask(request: Request, reply: IReply) {
  //     const task = await MongoDbService.getTaskById(request.params.taskId);
  //     reply(task);
  // }

  static async getTasks(request: Request, reply: IReply) {
      const tasks = await MongoDbService.getTasks();
      reply(tasks);
  }

};
