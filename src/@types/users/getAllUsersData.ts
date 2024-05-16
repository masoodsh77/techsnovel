import { UserData } from './userData';

export type GetAllUsersResponseType = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
};
