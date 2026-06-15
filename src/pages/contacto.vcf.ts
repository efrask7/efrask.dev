import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const vcf = `BEGIN:VCARD
VERSION:3.0
N:Schettini;Efraín;;;
FN:Efraín Schettini

NICKNAME:Efrask

ORG:Efrask Tech UY
TITLE:Desarrollador Web

TEL;TYPE=CELL:+59892001684

EMAIL:efrainschettini@gmail.com

URL:https://efrask.dev
URL:https://github.com/efrask7

IMPP:https://wa.me/59892001684

X-SOCIALPROFILE;TYPE=github:https://github.com/efrask7

PHOTO;VALUE=URI:https://avatars.githubusercontent.com/efrask7
LOGO;VALUE=URI:https://avatars.githubusercontent.com/efrask7

END:VCARD`

  return new Response(vcf, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      // 'Content-Disposition': 'attachment; filename="efrask.vcf"',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    }
  })
}
