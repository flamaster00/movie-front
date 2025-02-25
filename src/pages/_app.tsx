import { StrictMode, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '@/app/styles/styles.scss';
import RootLayout from './layout';
import StoreProvider from '@/app/store/StoreProvider';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  return (
    <StoreProvider >
      <StrictMode>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </StrictMode>
    </StoreProvider>
  )
}