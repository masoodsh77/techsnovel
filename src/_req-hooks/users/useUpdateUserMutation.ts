// /* istanbul ignore file */
// /* tslint:disable */
// /* eslint-disable */
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ErrorResponse } from '@/@types/site/ErrorResponse';

import UpdateUsers from '@/_requests/users/updateUsers';
import {
  UpdateUserRequestBodyType,
  UpdateUserResponseType,
} from '@/@types/users/updateUserData';

export function useUpdateUsersMutation(
  options?: UseMutationOptions<
    UpdateUserResponseType,
    ErrorResponse,
    UpdateUserRequestBodyType
  >
) {
  return useMutation<
    UpdateUserResponseType,
    ErrorResponse,
    UpdateUserRequestBodyType
  >((data: UpdateUserRequestBodyType) => UpdateUsers(data), options);
}
