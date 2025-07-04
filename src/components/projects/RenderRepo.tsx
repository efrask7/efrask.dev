import { useEffect, useState } from "react"
import type { IGetRepoDataResponse } from "../../actions/getRepoData"
import getRepoData from "../../actions/getRepoData"
import Error404 from "../Error404.astro"
import ProjectCard from "./ProjectCard"
import ProjectMD from "../../ignoretailwind/components/ProjectMD"
import { marked } from "marked"
import SectionCardReact from "../index/SectionCardReact"
import Error404React from "../Error404React"

interface IRenderRepoProps {
  lang: string
  visit_repo: string
  visit_web: string
  view_more: string
}

export default function RenderRepo({ lang, visit_repo, visit_web, view_more }: IRenderRepoProps) {

  const [loading, setLoading] = useState(true)
  const [repoData, setRepoData] = useState<IGetRepoDataResponse | null>(null)
  const [readme, setReadme] = useState("")
  const name = new URLSearchParams(window.location.search).get('name')

  useEffect(() => {
    if (!name) return

    (async () => {
      const data = await getRepoData(name)
      if (data) {
        setRepoData(data)
        setReadme(await marked(data.readme))
      }
      setLoading(false)
    })()
  }, [name])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!repoData) {
    return <Error404React />
  }

  return (
    <>
      <ProjectCard {...repoData} hideMore visit_repo={visit_repo} visit_web={visit_web} view_more={view_more} lang={lang} />

      <SectionCardReact title="Readme.md">
        <div className="px-4 py-2 rounded-lg flex flex-col gap-2">
          <ProjectMD content={readme} />
        </div>
      </SectionCardReact>
    </>
  )
}