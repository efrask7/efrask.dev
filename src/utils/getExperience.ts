interface IExperience {
  name: string
  description: string
  github?: string
  website?: string
  skills: string[]
  time: string[]
}

export default async function getExperience(lang: string): Promise<IExperience[]> {
  try {
    const experience = await import(`../language/${lang}/experience.json`)

    if (!experience) return []

    return experience['default']
  } catch (error) {
    return []
  }
}