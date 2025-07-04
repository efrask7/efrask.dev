interface IProjectMDProps {
  content: string
}

export default function ProjectMD({ content }: IProjectMDProps) {
  return (
    <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
  )
}

