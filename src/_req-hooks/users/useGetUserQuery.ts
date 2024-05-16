/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { ErrorResponse } from '@/@types/site/ErrorResponse';
import { GetUserResponseType } from '@/@types/users/getUserData';
import GetUser from '@/_requests/users/getUser';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

type getUserType = {
  id: string;
};

export function useGetUserQuery(
  queryFnArgs: getUserType,
  options?: UseQueryOptions<GetUserResponseType, ErrorResponse>
) {
  const queryKey = ['getUserQuery', JSON.stringify(queryFnArgs.id)];

  return useQuery<GetUserResponseType, ErrorResponse>(
    queryKey,

    async (): Promise<GetUserResponseType> => GetUser(queryFnArgs.id),
    options
  );
}
