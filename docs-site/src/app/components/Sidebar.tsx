'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './Sidebar.module.css'

interface Header {
  id: string
  title: string
  level: number
}

interface SidebarProps {
  headers: Header[]
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ headers, isOpen, onClose }: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeId, setActiveId] = useState('')
  const [filteredHeaders, setFilteredHeaders] = useState(headers)

  
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('')
    }
  }, [isOpen])

  
  useEffect(() => {
    setFilteredHeaders(headers)
  }, [headers])

  
  const filterHeaders = useCallback((term: string) => {
    if (!term.trim()) {
      setFilteredHeaders(headers)
      return
    }
    
    const normalizedTerm = term.toLowerCase().trim()
    const filtered = headers.filter(header =>
      header.title.toLowerCase().includes(normalizedTerm)
    )
    setFilteredHeaders(filtered)
  }, [headers])

  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value
    setSearchTerm(newTerm)
    filterHeaders(newTerm)
  }

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    headers.forEach((header) => {
      const element = document.getElementById(header.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headers])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  
  const groupedHeaders = filteredHeaders.reduce<{ [key: number]: Header[] }>((acc, header) => {
    if (!acc[header.level]) {
      acc[header.level] = []
    }
    acc[header.level].push(header)
    return acc
  }, {})

  return (
    <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.sidebarHeader}>
        <h3 className={styles.sidebarTitle}>On this page</h3>
        {isOpen && (
          <button className={styles.closeButton} onClick={onClose} aria-label="Close sidebar">
            &times;
          </button>
        )}
      </div>
      
      <div className={styles.searchContainer}>
        <input
          type="search"
          placeholder="Search sections..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
          aria-label="Search sections"
        />
      </div>

      <div className={styles.sidebarContent}>
        <ul className={styles.navList}>
          {/* Display level 1 headers first */}
          {groupedHeaders[1]?.map((header) => (
            <li 
              key={header.id} 
              className={`
                ${styles.navItem} 
                ${styles.level1}
                ${activeId === header.id ? styles.active : ''}
              `}
            >
              <a 
                href={`#${header.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick(header.id)
                }}
              >
                {header.title}
              </a>
              
              {/* Display related level 2 headers */}
              {groupedHeaders[2]?.filter(subHeader => 
                subHeader.id.startsWith(header.id.split('-')[0])
              ).map((subHeader) => (
                <ul key={subHeader.id} className={styles.subList}>
                  <li 
                    className={`
                      ${styles.navItem} 
                      ${styles.level2}
                      ${activeId === subHeader.id ? styles.active : ''}
                    `}
                  >
                    <a 
                      href={`#${subHeader.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleClick(subHeader.id)
                      }}
                    >
                      {subHeader.title}
                    </a>
                  </li>
                </ul>
              ))}
            </li>
          ))}
          {filteredHeaders.length === 0 && (
            <li className={styles.noResults}>No matching sections found</li>
          )}
        </ul>
      </div>
    </nav>
  )
} 