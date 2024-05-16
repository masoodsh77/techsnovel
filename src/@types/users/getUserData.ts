import { UserData } from './userData';

export type GetUserResponseType = {
  data: UserData;
  support: {
    url: string;
    text: string;
  };
};
