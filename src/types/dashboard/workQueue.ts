export type WorkQueueTabId = 'assigned' | 'pending' | 'referrals';

export interface WorkQueueTab {
  id: WorkQueueTabId;
  label: string;
  count: number;
}

export interface WorkQueueOriginator {
  name: string;
  initials: string;
}

export type WorkQueueItemStatus =
  | 'New'
  | 'Pending Review'
  | 'Completed';

export interface WorkQueueItem {
  id: number,
  originator: WorkQueueOriginator,
  client: string,
  line: string,
  type: string,
  status: WorkQueueItemStatus,
  createdAt: string,
}

export interface WorkQueue {
  tabs: WorkQueueTab[],
  items: WorkQueueItem[],
}