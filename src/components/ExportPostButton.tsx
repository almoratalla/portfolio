'use client'

import { useDocumentInfo } from '@payloadcms/ui'
import { Button } from '@payloadcms/ui'
import { useState } from 'react'

export const ExportPostButton: React.FC = () => {
  const { id, title } = useDocumentInfo()
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async (format: 'markdown' | 'json' = 'markdown') => {
    if (!id) return

    setIsExporting(true)
    try {
      const endpoint = format === 'markdown' ? '/api/export-post' : '/api/export-post-json'
      const response = await fetch(`${endpoint}?id=${id}`)
      
      if (!response.ok) {
        throw new Error('Export failed')
      }

      // Get the filename from the response headers
      const contentDisposition = response.headers.get('Content-Disposition')
      const filename = contentDisposition
        ? contentDisposition.split('filename=')[1]?.replace(/"/g, '')
        : `post.${format === 'markdown' ? 'md' : 'json'}`

      // Create blob and download
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)

      // Show success message
      const message = format === 'markdown' 
        ? 'Post exported as Markdown successfully!' 
        : 'Post exported as JSON successfully!'
      
      // Use a more subtle notification if available, otherwise use alert
      if (typeof window !== 'undefined' && (window as any).showNotification) {
        (window as any).showNotification(message, 'success')
      } else {
        alert(message)
      }
    } catch (error) {
      console.error('Export error:', error)
      const errorMessage = 'Export failed. Please try again.'
      
      if (typeof window !== 'undefined' && (window as any).showNotification) {
        (window as any).showNotification(errorMessage, 'error')
      } else {
        alert(errorMessage)
      }
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div style={{ 
      padding: '16px', 
      backgroundColor: '#f8f9fa', 
      border: '1px solid #e9ecef', 
      borderRadius: '4px',
      marginBottom: '20px' 
    }}>
      <h3 style={{ 
        margin: '0 0 12px 0', 
        fontSize: '14px', 
        fontWeight: 'bold',
        color: '#495057' 
      }}>
        Export Post
      </h3>
      
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <Button
          onClick={() => handleExport('markdown')}
          disabled={isExporting || !id}
          size="small"
        >
          {isExporting ? 'Exporting...' : 'Export as Markdown'}
        </Button>
        
        <Button
          onClick={() => handleExport('json')}
          disabled={isExporting || !id}
          size="small"
        >
          {isExporting ? 'Exporting...' : 'Export as JSON'}
        </Button>
      </div>
      
      <p style={{ 
        fontSize: '12px', 
        color: '#666', 
        margin: '0',
        lineHeight: '1.4'
      }}>
        <strong>Markdown:</strong> Human-readable format with content and metadata.<br/>
        <strong>JSON:</strong> Raw data format for programmatic use.
      </p>
      
      {title && (
        <p style={{ 
          fontSize: '12px', 
          color: '#28a745', 
          margin: '8px 0 0 0',
          fontWeight: 'bold'
        }}>
          Ready to export: &quot;{title}&quot;
        </p>
      )}
    </div>
  )
}

// Export as default for PayloadCMS
export default ExportPostButton
