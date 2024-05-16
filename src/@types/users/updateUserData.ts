import { UserData } from './userData';

export type UpdateUserResponseType = {
  statusCode: number;
  user: UserData;
};

export type UpdateUserRequestBodyType = {
  id: string;
  data: {
    first_name: string;
    last_name: string;
    email: string;
  };
};
