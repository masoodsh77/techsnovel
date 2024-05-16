'use client';

import MainLayout from '@/layout/main/layout';
import React, { PropsWithChildren } from 'react';



export default function Layout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}
