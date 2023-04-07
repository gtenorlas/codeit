import '@/styles/globals.css'

import MainLayout from '@/src/components/Layout/MainLayout'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
