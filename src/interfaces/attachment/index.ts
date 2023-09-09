import { TaskInterface } from 'interfaces/task';
import { GetQueryInterface } from 'interfaces';

export interface AttachmentInterface {
  id?: string;
  name: string;
  url: string;
  task_id: string;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  _count?: {};
}

export interface AttachmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  url?: string;
  task_id?: string;
}
