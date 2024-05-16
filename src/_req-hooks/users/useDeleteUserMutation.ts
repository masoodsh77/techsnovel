// /* istanbul ignore file */
// /* tslint:disable */
// /* eslint-disable */
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ErrorResponse } from '@/@types/site/ErrorResponse';
import {
  DeleteUsersResponseData,
  DeleteUsersRequestBodyData,
} from '@/@types/users/deleteUsersData';
import DeleteUsers from '@/_requests/users/deleteUsers';

export function useDeleteUsersMutation(
  options?: UseMutationOptions<
    DeleteUsersResponseData,
    ErrorResponse,
    DeleteUsersRequestBodyData
  >
) {
  return useMutation<
    DeleteUsersResponseData,
    ErrorResponse,
    DeleteUsersRequestBodyData
  >((data: DeleteUsersRequestBodyData) => DeleteUsers(data), options);
}
