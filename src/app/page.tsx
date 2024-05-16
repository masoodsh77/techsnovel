import MainLayout from '@/layout/main/layout';
import { HomeView } from '@/sections/home/view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Techsnovel | code challenge',
};

export default function Home() {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
}
