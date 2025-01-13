import { BsX } from "react-icons/bs"

interface IImgViewerProps {
  opened: boolean
  img: string
  onClose: () => void
}

export default function ImgViewer({ opened, img, onClose }: IImgViewerProps) {
  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center size-full bg-gray-900/60 px-6 py-8 z-50 ${opened ? '' : 'hidden'}`}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose()
        }
      }}
      tabIndex={opened ? 1 : -1}
    >
      <button className="absolute top-0 right-0 -translate-x-8 translate-y-4 bg-custom rounded-full p-1 text-xl" onClick={onClose}>
        <BsX />
      </button>

      {
        img && (
          <img
            src={img}
            alt="Img"
            className="w-full h-auto lg:w-auto lg:h-full rounded-sm"
          />
        )
      }

    </div>
  )
}