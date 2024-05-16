'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import TanStackProvider from './_providers/tanstack-provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store/store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <TanStackProvider>
            {children}
            <ToastContainer />
          </TanStackProvider>
        </Provider>
      </body>
    </html>
  );
}
