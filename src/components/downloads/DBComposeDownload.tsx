import { useCallback, useEffect, useState, type ReactNode } from "react"
import { LuDownload, LuMonitor, LuRefreshCw, LuTerminal } from "react-icons/lu"
import { detectPlatform } from "../../utils/detectPlatform"
import SectionCardReact from "../index/SectionCardReact"

interface ReleasePlatform {
  url: string
  signature?: string
}

interface LatestRelease {
  version: string
  notes?: string
  pub_date?: string
  platforms: Record<string, ReleasePlatform | undefined>
}

const LATEST_JSON_URL = "https://files.efrask.dev/dbcompose/stable/latest.json"

function isValidUrl(value: unknown): value is string {
  return typeof value === "string" && value.length > 0
}

function formatPubDate(pubDate?: string): string | null {
  if (!isValidUrl(pubDate)) return null

  const date = new Date(pubDate)
  if (Number.isNaN(date.getTime())) return null

  return date.toLocaleDateString("es-UY", { day: "2-digit", month: "2-digit", year: "numeric" })
}

export default function DBComposeDownload() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [release, setRelease] = useState<LatestRelease | null>(null)
  const [platform, setPlatform] = useState<"windows" | "linux" | "unknown">("unknown")

  const fetchLatest = useCallback(() => {
    setLoading(true)
    setError(false)

    fetch(LATEST_JSON_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Request failed")
        return response.json()
      })
      .then((data: LatestRelease) => {
        if (!data || typeof data.version !== "string") throw new Error("Invalid payload")
        setRelease(data)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    setPlatform(detectPlatform())
    fetchLatest()
  }, [fetchLatest])

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-3 py-6 text-primary-light">
        <div className="size-6 animate-spin rounded-full border-2 border-primary-light border-t-transparent"></div>
        <p className="font-montserrat">Consultando última versión...</p>
      </div>
    )
  }

  if (error || !release) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <p className="font-montserrat text-bg-light">
          No se pudo obtener la última versión en este momento.
        </p>
        <button
          type="button"
          onClick={fetchLatest}
          className="flex items-center gap-2 rounded-lg border border-primary/30 bg-bg-dark/80 px-3 py-1.5 text-btns transition-colors hover:text-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light"
        >
          <LuRefreshCw className="size-4" />
          Intentar nuevamente
        </button>
      </div>
    )
  }

  const windowsUrl = release.platforms["windows-x86_64"]?.url
  const linuxUrl = release.platforms["linux-x86_64"]?.url
  const pubDate = formatPubDate(release.pub_date)

  const windowsButton = isValidUrl(windowsUrl) && (
    <DownloadOption
      href={windowsUrl}
      label="Descargar para Windows"
      sublabel="Windows · Instalador x86_64"
      icon={<LuMonitor className="size-5" />}
      primary={platform !== "linux"}
    />
  )

  const linuxButton = isValidUrl(linuxUrl) && (
    <DownloadOption
      href={linuxUrl}
      label="Descargar para Linux"
      sublabel="Linux · AppImage x86_64"
      icon={<LuTerminal className="size-5" />}
      primary={platform === "linux"}
    />
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-1 text-center">
        <p className="font-raleway text-xl font-bold uppercase tracking-wide text-primary-light">
          Versión {release.version}
        </p>
        {pubDate && <p className="font-montserrat text-sm text-bg-light/70">Publicado el {pubDate}</p>}
      </div>

      <div className="flex flex-col gap-3">
        {platform === "linux" ? (
          <>
            {linuxButton}
            {windowsButton}
          </>
        ) : (
          <>
            {windowsButton}
            {linuxButton}
          </>
        )}
      </div>

      <SectionCardReact title="Novedades de esta versión">
        <p className="whitespace-pre-line font-montserrat text-sm text-bg-light/90">
          {release.notes && release.notes.trim().length > 0
            ? release.notes
            : "No hay notas disponibles para esta versión."}
        </p>
      </SectionCardReact>
    </div>
  )
}

interface IDownloadOptionProps {
  href: string
  label: string
  sublabel: string
  icon: ReactNode
  primary: boolean
}

function DownloadOption({ href, label, sublabel, icon, primary }: IDownloadOptionProps) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <a
        href={href}
        className={
          primary
            ? "flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 font-montserrat font-medium text-white transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary-light"
            : "flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-bg-dark/80 px-4 py-2.5 font-montserrat text-btns transition-colors hover:text-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light"
        }
      >
        {icon}
        {label}
        <LuDownload className="size-4" />
      </a>
      <p className="font-montserrat text-xs text-bg-light/60">{sublabel}</p>
    </div>
  )
}
