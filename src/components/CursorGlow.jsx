import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (!glowRef.current) return
      glowRef.current.style.left = `${e.clientX}px`
      glowRef.current.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-opacity duration-300"
      style={{
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
        animation: 'fadeIn 1s ease 0.5s forwards',
      }}
    />
  )
}
