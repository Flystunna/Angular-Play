export interface tokenDTO { 
    token?: string;
    refreshToken?: string;
    validity?: number;
    code?: string;
    shortDescription?: string;
    resp?: boolean;
    expires?: Date;
}
