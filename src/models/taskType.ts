import * as mongoose from 'mongoose';

export interface ITask extends mongoose.Document {
    _id?: string;
    name: string;
    createdDate?: string;
    status?: string;
}

export const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

const Task = mongoose.model<ITask>('ITask', TaskSchema);
export default Task;
