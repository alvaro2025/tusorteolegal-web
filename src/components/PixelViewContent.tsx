'use client'

import { useEffect } from 'react'

interface Props {
  contentName: string
  contentId: string
  value: number
}

export default function PixelViewContent({ contentName, contentId, value }: Props) {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: contentName,
        content_ids: [contentId],
        content_type: 'product',
        value: value,
        currency: 'CLP',
      })
    }
  }, [contentName, contentId, value])

  return null
}
