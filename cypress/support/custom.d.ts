// This is going to be used for DB resultsets, leaving here only for learn purposes
export interface QualificationRecord {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type QueryDbResult = QualificationRecord[];
