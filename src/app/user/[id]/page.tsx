import { UserView } from '@/sections/user/view';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'User view',
};

type Props = {
  params: {
    id: string;
  };
};

export default function UserPage({ params }: Props) {
  return <UserView id={params.id} />;
}
