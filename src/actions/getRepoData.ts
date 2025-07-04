export interface IGetRepoDataResponse extends IGithubRepo {
  readme: string
}

export default async function getRepoData(repo: string): Promise<IGetRepoDataResponse | false> {
  try {
    const req = await fetch(`https://api.github.com/repos/efrask7/${repo}`)
    const res = await req.json() as IGetRepoDataResponse

    if (!res.id || req.status === 404) return false

    const raw_req = await fetch(`https://raw.githubusercontent.com/efrask7/${repo}/${res.default_branch}/readme.md`)

    if (raw_req.status === 404) {
      const readme_req = await fetch(`https://raw.githubusercontent.com/efrask7/${repo}/${res.default_branch}/README.md`)
      const readme_res = await readme_req.text()
      return {
        ...res,
        readme: readme_res
      }
    }

    const res_raw = await raw_req.text()

    return {
      ...res,
      readme: res_raw
    }
  } catch (error) {
    return false
  }
}