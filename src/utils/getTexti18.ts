export default async function getTextI18(lang: string, title: string) {
  const langToUse = lang || 'es'

  const texts = await import(`../language/${langToUse}/general.json`) as {
    [key: string]: string
  }

  const text = texts[title]

  if (!text) {
    return '-'
  }

  return text
}