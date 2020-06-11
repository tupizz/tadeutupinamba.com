import { AppProps } from 'next/app';

import MainLayout from '../layouts/_mainLayout';
import { ProfileProvider } from './../context/ProfileContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProfileProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ProfileProvider>
  );
}

export default MyApp;
