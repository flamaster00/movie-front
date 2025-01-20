import styles from './index.module.scss'

import StoreProvider from "@/shared/store/StoreProvider";
import { Navbar } from "@/widgets/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StoreProvider>
        <Navbar />
        <main className={styles.page}>
          {children}
        </main>
      </StoreProvider>
    </>
  )
}