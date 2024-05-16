'use client';

import { useGetUserQuery } from '@/_req-hooks/users/useGetUserQuery';
import Iconify from '@/components/iconify/iconify';
import {
  Avatar,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

type Props = {
  id: string;
};

export default function UserView(props: Props) {
  const { id } = props;

  const router = useRouter();

  const { data: userData } = useGetUserQuery({ id });

  const handleBack = useCallback(() => {
    router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditUser = useCallback(() => {
    if (!id) return;
    router.push(`/user/edit/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack sx={{ width: 1, justifyContent: 'start', alignItems: 'start' }}>
        <IconButton onClick={handleBack}>
          <Iconify icon="ep:back" />
        </IconButton>
      </Stack>
      <Stack spacing={5} justifyContent="center" alignItems="center">
        <Avatar src={userData?.data.avatar} sx={{ width: 300, height: 300 }} />
        <Typography variant="h5">
          {userData?.data.first_name} {userData?.data.last_name}
        </Typography>
        <Typography>{userData?.data.email}</Typography>
        <Button variant="outlined" onClick={handleEditUser}>
          Edit User
        </Button>
      </Stack>
    </Paper>
  );
}
