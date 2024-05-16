import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import React from 'react';

const RootStyle = styled(Stack)(({ theme }) => ({
  width: '100vw',
  height: 64,
  padding: theme.spacing(0, 2),
  backgroundColor: theme.palette.primary.main,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export default function Header() {
  return (
    <RootStyle>
      <Image
        src="/assets/Images/Logo.webp"
        alt="Logo"
        width={160}
        height={64}
      />
    </RootStyle>
  );
}
