'use client';

import { useGetUserQuery } from '@/_req-hooks/users/useGetUserQuery';
import EditUserForm from '../edit-user-form';
import { IconButton, Paper, Stack, Typography } from '@mui/material';
import Iconify from '@/components/iconify';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

type Props = {
  id: string;
};

export default function EditUserView({ id }: Props) {
  const { data: currentUser } = useGetUserQuery({ id });

  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={5}>
        <Stack direction="row" spacing={2}>
          <IconButton onClick={handleBack}>
            <Iconify icon="ep:back" />
          </IconButton>
          <Stack>
            <Typography variant="h5">
              Edit {currentUser?.data.first_name}{' '}
              {currentUser?.data.last_name}{' '}
            </Typography>
            <Typography variant="subtitle2">Here You can edit users</Typography>
          </Stack>
        </Stack>
        <EditUserForm currentUser={currentUser?.data!} id={id} />
      </Stack>
    </Paper>
  );
}
