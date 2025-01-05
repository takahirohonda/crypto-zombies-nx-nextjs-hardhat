'use client'

import { NextUIProvider } from '@nextui-org/react'

export const NextUIProviderWrapper = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <NextUIProvider className="flex min-h-screen flex-col w-[100%]">
      {children}
    </NextUIProvider>
  )
}
