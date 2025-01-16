const langs = ['es', 'en']

export default function getSupportedLangs() {
  return langs.map((lang) => ({
    params: {
      lang
    }
  }))
}