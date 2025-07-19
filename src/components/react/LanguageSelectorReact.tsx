import { useEffect, useState } from "react"
import { BsCaretDownFill } from "react-icons/bs"
import getTextI18 from "../../utils/getTexti18"

interface ILanguageSelectorProps {
  lang: string
  langs: { [key: string]: string }
}

export default function LanguageSelectorReact({ lang, langs }: ILanguageSelectorProps) {
  const [open, setOpen] = useState(false)
  const [btn_title, setBtnTitle] = useState('')

  useEffect(() => {
    (async () => {
      const btn_lang = await getTextI18(lang, 'language_selector')
      setBtnTitle(btn_lang)
    })()
  }, [lang])

  return (
    <div className="relative group">
      <button
        onClick={() => setOpen(prev => !prev)}
        className={`flex items-center gap-1  border border-custom2 px-2 rounded-sm hover:bg-custom2/20 ${open ? 'bg-custom2 text-black rounded-br-none hover:text-white' : 'text-custom2'}`}
        title={btn_title}
      >
        <BsCaretDownFill
          className={`transform transition-transform ${open ? 'rotate-0' : '-rotate-90'}`}
        /> {lang.toUpperCase()}
      </button>

      {open && (
        <div className="absolute text-black text-lg font-bold font-raleway flex flex-col rounded-md divide-y overflow-hidden divide-black right-0 rounded-tr-none">
          {Object.keys(langs).map((l) => (
            <a
              key={l}
              href={`/${l}/${location.pathname.split('/')[2] ?? ''}`}
              className="hover:text-black/80 px-6 py-1 hover:bg-custom2/30 hover:text-white bg-custom2"
              title={langs[l]}
            >
              {langs[l]}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}