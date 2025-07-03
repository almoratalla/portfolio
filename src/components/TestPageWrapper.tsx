import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

interface TestPageWrapperProps {
  children: ReactNode
  title?: string
}

export default function TestPageWrapper({ children, title = 'Test Page' }: TestPageWrapperProps) {
  // Block access in production
  if (process.env.NODE_ENV === 'production') {
    notFound()
  }

  return (
    <div className="container mx-auto p-8">
      <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h1 className="text-2xl font-bold text-yellow-800 mb-2">{title}</h1>
        <p className="text-yellow-700 text-sm">
          ⚠️ This is a development/testing page and is not accessible in production.
        </p>
      </div>
      {children}
    </div>
  )
}
