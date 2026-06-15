import type { ReactNode } from "react"

interface ISectionCardProps {
  title: string
  children: ReactNode
}

export default function SectionCardReact({ title, children }: ISectionCardProps) {
  return (
    <section
      className="rounded-lg overflow-hidden border border-primary/30 bg-bg-dark/70 shadow-sm shadow-primary/20"
      id={title}
    >
      <div className="bg-primary/15 px-2 border-b border-primary/20">
        <h2 className="text-md font-bold uppercase font-mono text-primary-light">{title}</h2>
      </div>

      <div className="p-2">
        {children}
      </div>

    </section>
  )
}

