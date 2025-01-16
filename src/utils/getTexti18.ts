import getSupportedLangs from "./lang"

export default async function getTextI18(lang: string, title: string) {
  let langToUse = lang || 'es'

  const supportedLanguages = getSupportedLangs().map(lang => lang.params.lang)

  if (!supportedLanguages.includes(langToUse)) {
    langToUse = 'es'
  }

  const texts = await import(`../language/${langToUse}/general.json`) as {
    [key: string]: string
  }

  const text = texts[title]

  if (!text) {
    return '-'
  }

  return text
}