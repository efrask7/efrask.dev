import { useEffect, useState } from "react"
import getTextI18 from "../../../utils/getTexti18"

interface IUserHeadersProps {
  lang: string
}

export default function UserHeader({ lang }: IUserHeadersProps) {

  const url = window.location.pathname
  const [show, setShow] = useState(url !== `/${lang}` && url !== `/${lang}/`)

  useEffect(() => {
    (async () => {
      if (url === `/${lang}` || url === `/${lang}/`) {
        const tech_title = await getTextI18(lang, 'tech')

        const rect = document.getElementById(tech_title)?.getBoundingClientRect()
        function setShowScroll() {
          if (rect) {
            const top = rect.height * 2
            const actualY = window.scrollY

            setShow(actualY > top)
          }
        }

        window.addEventListener('scroll', () => {
          setShowScroll()
        })

        setShowScroll()
      }
    })()
    return () => window.removeEventListener('scroll', () => { })
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