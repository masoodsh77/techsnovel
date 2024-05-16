import { EditUserView } from '@/sections/user/view';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Edit User',
};

type Props = {
  params: {
    id: string;
  };
};

export default function EditUserPage({ params }: Props) {
  return <EditUserView id={params.id} />;
}
