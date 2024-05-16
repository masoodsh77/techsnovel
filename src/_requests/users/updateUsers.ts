import {
  UpdateUserRequestBodyType,
  UpdateUserResponseType,
} from '@/@types/users/updateUserData';
import { users } from '@/_clients';
import { AxiosResponse } from 'axios';

export default async function UpdateUsers({
  id,
  user,
}: UpdateUserRequestBodyType): Promise<UpdateUserResponseType> {
  const response = await users.put<
    UpdateUserRequestBodyType,
    AxiosResponse<UpdateUserResponseType>
  >(`/api/users/${id}`, user);

  return response.data;
}
