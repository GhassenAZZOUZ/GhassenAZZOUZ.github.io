import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouch =
      navigator.maxTouchPoints > 0 ||
      'ontouchstart' in window ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(hover: none)').matches

    if (isTouch) return

    document.documentElement.classList.add('has-mouse')
    const dot  = dotRef.current!
    const ring = ringRef.current!
    let mx = 0, my = 0, rx = 0, ry = 0
    let frameId: number

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    function animate() {
      dot.style.left  = mx + 'px'
      dot.style.top   = my + 'px'
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      document.removeEventListener('mousemove', onMove)
      document.documentElement.classList.remove('has-mouse')
    }
  }, [])

  return (
    <>
      <div id="cursor-dot"  ref={dotRef}  aria-hidden="true" />
      <div id="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}
