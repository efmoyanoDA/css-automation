export interface QualificationRecord {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export type QueryDbResult = QualificationRecord[];
