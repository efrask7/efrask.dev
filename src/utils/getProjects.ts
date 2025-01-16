interface IProject {
  name: string
  description: string
  technologies: string[]
  github: string
  website?: string
  images: string[]
  imagesPath: string
}

export default async function getProjects(lang: string): Promise<IProject[]> {
  try {
    const projects = await import(`../language/${lang}/projects.json`)

    if (!projects) return []

    return projects['default']
  } catch (error) {
    return []
  }
}