'use client';

import Iconify from '@/components/iconify';
import { IconButton, Paper, Stack, Tooltip, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeDataGrid from '../home-data-grid';
import { useDispatch } from 'react-redux';
import { useGetAllUsersQuery } from '@/_req-hooks/users/useGetAllUsersQuery';
import { setTotal, setUsers } from '@/redux/slices/users';

export default function HomeView() {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);

  const dispatch = useDispatch();

  const { data, isLoading, refetch } = useGetAllUsersQuery({
    page: page + 1,
    per_page: pageSize,
  });

  useEffect(() => {
    dispatch(setUsers(data?.data || []));
    dispatch(setTotal(data?.total || 0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={5}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack>
            <Typography variant="h5">List of Users</Typography>
            <Typography variant="subtitle2">
              Here will be list of users
            </Typography>
          </Stack>
          <Tooltip title="Reload List">
            <IconButton onClick={() => refetch()}>
              <Iconify icon="hugeicons:reload" />
            </IconButton>
          </Tooltip>
        </Stack>
        <Stack sx={{ maxWidth: 1 }}>
          <HomeDataGrid
            reloadUsers={refetch}
            page={page}
            pageSize={pageSize}
            isLoading={isLoading}
            setPage={(page) => setPage(page)}
            setPageSize={(pageSize) => setPageSize(pageSize)}
          />
        </Stack>
      </Stack>
    </Paper>
  );
}
