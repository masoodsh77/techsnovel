'use client';

import React, { PropsWithChildren } from 'react';
import Header from './header';
import { Box, Stack } from '@mui/material';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <Stack>
      <Header />
      <Box sx={{ p: 4 }}>{children}</Box>
    </Stack>
  );
}
