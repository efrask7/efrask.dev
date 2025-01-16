export default async function getGithubProjects(): Promise<IGithubRepo[]> {
  try {
    const req = await fetch('https://api.github.com/users/efrask7/repos')
    const res = await req.json()

    if (res instanceof Array) return res

    return []
  } catch (error) {
    return []
  }
}