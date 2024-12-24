'use client'
import React, { useRef } from 'react'
import { makeStore, AppStore } from '../../store/store'
import { Provider } from 'react-redux'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}