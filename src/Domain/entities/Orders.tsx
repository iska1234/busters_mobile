export interface Orders {
    id: number;
    userId: number;
    lat:number;
    lng: number;
    status?: string;
    timestamp?: bigint;
    created_at: string;
    updated_at: string;
    data?: any;
    clientId?:number;
    clientname?: string;
    clientphone?:string;
    clientreference?:string;
  }
  