export interface Profile {
  username: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  address?: {
    country: string;
    postal: number;
  };
  favorite?: string[];
  gender?: 'MALE' | 'FEMALE' | string;
}
