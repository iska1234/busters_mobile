export interface ResponseApiBusters {
    success:boolean;
    message:string;
    data?: any;
    error?: {
      message: string;
      details?: Array<{ [key: string]: string }>
    };
  }
  