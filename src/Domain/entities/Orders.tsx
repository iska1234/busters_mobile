export interface Orders {
    id: number;
    userId: number;
    lat:number;
    lng: number;
    reference:string;
    status?: string;
    timestamp?: bigint;
    created_at: string;
    updated_at: string;
    data?: any;
  }
  