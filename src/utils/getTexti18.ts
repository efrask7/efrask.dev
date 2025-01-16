export default async function getTextI18(lang: string, title: string) {
  const texts = await import(`../language/${lang}/general.json`) as {
    [key: string]: string
  }

  const text = texts[title]

  if (!text) {
    return '-'
  }

  return text
}