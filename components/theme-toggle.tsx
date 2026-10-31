'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const next = saved ? saved === 'dark' : prefersDark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
  }, [])

  function toggle() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    window.localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return <button type="button" onClick={toggle} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`} className="inline-flex size-9 items-center justify-center rounded-full border border-current/15 transition-colors hover:bg-current/5">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
}
