import { useAppDispatch } from '@/app/store/hooks';
import styles from './index.module.scss'

import { Navbar } from "@/widgets/Navbar";
import { useEffect } from 'react';
import { userActions } from '@/entities/user';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [])

  return (
    <>
        <Navbar />
        <div className={styles.page}>
          {children}
        </div>
    </>
  )
}