import type { ReactNode } from "react"

interface ISectionCardProps {
  title: string
  children: ReactNode
}

export default function SectionCardReact({ title, children }: ISectionCardProps) {
  return (
    <section
      className="rounded-lg overflow-hidden shadow-sm shadow-custom2-1"
      id={title}
    >
      <div className="bg-gray-700 px-2">
        <h2 className="text-md font-bold uppercase font-mono text-custom2">{title}</h2>
      </div>

      <div className="p-2">
        {children}
      </div>

    </section>
  )
}

