'use client'

import { useEffect, useState } from 'react'
import styles from './MarkdownRenderer.module.css'

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [renderedContent, setRenderedContent] = useState<string>('')

  useEffect(() => {
    const parseMarkdown = (markdown: string): string => {
      if (!markdown) return ''

      const slugify = (text: string) =>
        text
          .toString()
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')

      const processInlines = (text: string) => {
        return text
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/`([^`]+)`/g, '<code>$1</code>')
      }

      const blocks = markdown.split(/(```[\s\S]*?```)/g)

      const html = blocks
        .map((block) => {
          if (block.startsWith('```')) {
            const lines = block.trim().split('\n')
            const lang = lines[0].substring(3)
            const code = lines.slice(1, -1).join('\n')
            const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;')
            return `<pre><code class="language-${lang}">${escapedCode}</code></pre>`
          }

          return block
            .replace(
              /^### (.*$)/gim,
              (m, p1) =>
                `<h3 id="${slugify(p1)}"><a href="#${slugify(
                  p1
                )}" class="${styles.anchorLink}">${processInlines(p1)}</a></h3>`
            )
            .replace(
              /^## (.*$)/gim,
              (m, p1) =>
                `<h2 id="${slugify(p1)}"><a href="#${slugify(
                  p1
                )}" class="${styles.anchorLink}">${processInlines(p1)}</a></h2>`
            )
            .replace(
              /^# (.*$)/gim,
              (m, p1) =>
                `<h1 id="${slugify(p1)}"><a href="#${slugify(
                  p1
                )}" class="${styles.anchorLink}">${processInlines(p1)}</a></h1>`
            )
            .replace(/^(?:-\s.*(?:\n|$))+/gm, (match) => {
              const items = match
                .trim()
                .split('\n')
                .map((item) => `<li>${processInlines(item.substring(2))}</li>`)
                .join('')
              return `<ul>${items}</ul>`
            })
            .replace(/^(?:\d+\.\s.*(?:\n|$))+/gm, (match) => {
              const items = match
                .trim()
                .split('\n')
                .map((item) => `<li>${processInlines(item.replace(/^\d+\.\s/, ''))}</li>`)
                .join('')
              return `<ol>${items}</ol>`
            })
            .split('\n')
            .map((line) => {
              if (line.trim() === '') return ''
              return line.startsWith('<') ? line : `<p>${processInlines(line)}</p>`
            })
            .join('')
        })
        .join('')

      return html
    }

    setRenderedContent(parseMarkdown(content))
  }, [content])

  return (
    <div
      className={styles.markdownContent}
      dangerouslySetInnerHTML={{ __html: renderedContent }}
    />
  )
} 