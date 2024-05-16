import { GetAllUsersResponseType } from '@/@types/users/getAllUsersData';
import { users } from '@/_clients';
import { AxiosResponse } from 'axios';

export default async function GetAllUsers(
  page: number,
  per_page?: number
): Promise<GetAllUsersResponseType> {
  const response = await users.get<
    void,
    AxiosResponse<GetAllUsersResponseType>
  >(`/api/users`, {
    params: { page, per_page },
  });

  return response.data;
}
