

export default async function getRepoData(repo: string) {
  try {
    const req = await fetch(`https://api.github.com/repos/efrask7/${repo}`)
    const res = await req.json() as IGithubRepo

    if (!res.id) return false

    const raw_req = await fetch(`https://raw.githubusercontent.com/efrask7/${repo}/${res.default_branch}/readme.md`)
    const res_raw = await raw_req.text()

    return {
      ...res,
      readme: res_raw
    }
  } catch (error) {
    return false
  }
}