import { IRouteConfiguration } from 'hapi';
import { TodoListTSController } from '../controllers/todoListTSController';

import * as Boom from 'boom';

/**
 * Routing configuration
 * All routes are together for easy overview
 */
export const routeConfig: IRouteConfiguration[] = [

  // allows load balancer to ping the server
  {
    method: 'GET',
    path: '/hello',
    config: { auth: false },
    handler: (request, reply) => {
      return reply(`hello at ${request.path}`);
    }
  },
  // get task by ID
//   {
//     method: 'GET',
//     path: '/tasks/{taskId}',
//     config: { auth: false },
//     handler: TodoListTSController.getTask
//   },
  // get all tasks
  {
    method: 'GET',
    path: '/tasks',
    config: { auth: false },
    handler: TodoListTSController.getTasks
  }
];
