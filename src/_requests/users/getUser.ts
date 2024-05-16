import { GetUserResponseType } from '@/@types/users/getUserData';
import { users } from '@/_clients';
import { AxiosResponse } from 'axios';

export default async function GetUser(
  id: string
): Promise<GetUserResponseType> {
  const response = await users.get<void, AxiosResponse<GetUserResponseType>>(
    `/api/users/${id}`
  );

  return response.data;
}
