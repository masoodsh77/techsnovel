/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { ErrorResponse } from '@/@types/site/ErrorResponse';
import { GetAllUsersResponseType } from '@/@types/users/getAllUsersData';
import GetAllUsers from '@/_requests/users/getAllUsers';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

type getAllUsersType = {
  page: number;
  per_page?: number;
};

export function useGetAllUsersQuery(
  queryFnArgs: getAllUsersType,
  options?: UseQueryOptions<GetAllUsersResponseType, ErrorResponse>
) {
  const queryKey = ['getAllUsersQuery', JSON.stringify(queryFnArgs)];

  return useQuery<GetAllUsersResponseType, ErrorResponse>(
    queryKey,
    async (): Promise<GetAllUsersResponseType> =>
      GetAllUsers(queryFnArgs.page, queryFnArgs.per_page),
    options
  );
}
