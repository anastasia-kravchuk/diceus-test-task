export type CommunicationTag = 'NEW' | 'Responded' | null;

export interface CommunicationItem {
  id: number;
  tag: CommunicationTag;
  subject: string;
  sender: string;
  date: string;
  preview: string;
  attachments: number;
  isPriority: boolean;
}