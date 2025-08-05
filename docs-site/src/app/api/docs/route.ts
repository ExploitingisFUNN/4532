import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET() {
  try {
    const docsPath = path.join(process.cwd(), 'docs', 'DOCS.md')
    const content = await readFile(docsPath, 'utf-8')
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  } catch (error) {
    console.error('Error reading DOCS.md:', error)
    return new NextResponse('# Changelog\n\nError loading changelog content.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
} 