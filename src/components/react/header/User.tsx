import { useEffect, useState } from "react"

export default function UserHeader() {

  const url = window.location.pathname
  const [show, setShow] = useState(url !== '/')

  useEffect(() => {
    if (url === '/') {
      window.addEventListener('scroll', () => {
        const rect = document.getElementById('Tecnologías')?.getBoundingClientRect()

        if (rect) {
          const top = rect.height * 2
          const actualY = window.scrollY

          setShow(actualY > top)
        }
      })

      return () => window.removeEventListener('scroll', () => { })
    }
  }, [])

  return (
    <div className={`flex items-center gap-1 ${show ? 'opacity-100 cursor-pointer pointer-events-auto' : 'opacity-0 cursor-none pointer-events-none'} transition-opacity`}>
      <a href="/" className="text-btns">efrask.dev</a>
      <img
        src="https://avatars.githubusercontent.com/efrask7"
        alt="efrask7"
        className="size-6 rounded-full"
      />
    </div>
  )
}