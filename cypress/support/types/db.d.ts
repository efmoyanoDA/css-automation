export interface QueryOptions {
  table: string;
  columns?: string[];
  where?: string;
  join?: string;
  orderBy?: string;
  limit?: number;
}

export interface DeleteOptions {
  table: string;
  where: string;
  params?: object[];
}
