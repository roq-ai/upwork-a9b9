import { AttachmentInterface } from 'interfaces/attachment';
import { CommentInterface } from 'interfaces/comment';
import { ProjectInterface } from 'interfaces/project';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  start_date: any;
  end_date: any;
  project_id: string;
  created_at?: any;
  updated_at?: any;
  attachment?: AttachmentInterface[];
  comment?: CommentInterface[];
  project?: ProjectInterface;
  _count?: {
    attachment?: number;
    comment?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  project_id?: string;
}
