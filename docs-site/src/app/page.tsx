'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { MarkdownRenderer } from './components/MarkdownRenderer'
import { Sidebar } from './components/Sidebar'

interface Header {
  id: string
  title: string
  level: number
}

export default function DocsPage() {
  const [markdownContent, setMarkdownContent] = useState<string>('')
  const [headers, setHeaders] = useState<Header[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const response = await fetch('/api/docs')
        if (response.ok) {
          const content = await response.text()
          setMarkdownContent(content)

          const slugify = (text: string) =>
            text.toString().toLowerCase().trim()
              .replace(/\s+/g, '-')
              .replace(/[^\w\-]+/g, '')
              .replace(/\-\-+/g, '-')

          const headerLines = content.match(/^#{1,2}\s.*$/gm) || []
          const extractedHeaders = headerLines.map(line => {
            const level = line.startsWith('##') ? 2 : 1
            const title = line.replace(/^#{1,2}\s/, '')
            const id = slugify(title)
            return { id, title, level }
          })
          setHeaders(extractedHeaders)
        } else {
          setMarkdownContent('# Changelog\n\nError loading changelog content.')
        }
      } catch (error) {
        console.error('Failed to fetch docs:', error)
        setMarkdownContent('# Changelog\n\nError loading changelog content.')
      } finally {
        setIsLoaded(true)
      }
    }

    fetchDocs()
  }, [])

  return (
    <div className={styles.pageWrapper}>
      <button className={styles.hamburgerButton} onClick={() => setSidebarOpen(true)}>
        <div className={styles.hamburgerIcon}></div>
      </button>
      {isSidebarOpen && <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />}
      <Sidebar headers={headers} isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={`${styles.docsContainer} ${isLoaded ? styles.loaded : ''}`}>
            <MarkdownRenderer content={markdownContent} />
          </div>

          <footer className={styles.footer}>
            <p>&copy; 2025 exploitingis.FUN - All rights reserved.</p>
            <p className={styles.disclaimer}>
              This project is independently developed and is not affiliated with, endorsed by, or in any way officially connected with Roblox Corporation or Microsoft Corporation.
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
} 