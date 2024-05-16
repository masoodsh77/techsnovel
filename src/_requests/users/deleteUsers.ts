import {
  DeleteUsersRequestBodyData,
  DeleteUsersResponseData,
} from '@/@types/users/deleteUsersData';
import { users } from '@/_clients';
import { AxiosResponse } from 'axios';

export default async function DeleteUsers({
  id,
}: DeleteUsersRequestBodyData): Promise<DeleteUsersResponseData> {
  const response = await users.delete<
    DeleteUsersRequestBodyData,
    AxiosResponse<DeleteUsersResponseData>
  >(`/api/users/${id}`);

  return response.data;
}
