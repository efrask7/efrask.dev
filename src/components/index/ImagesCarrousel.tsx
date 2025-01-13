import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/effect-cards'
import ImgViewer from "../ImgViewer"
import { useState } from "react"

interface IImagesCarrouselProps {
  path: string
  images: string[]
}

export default function ImagesCarrousel({ path, images }: IImagesCarrouselProps) {

  const [imgViewerProps, setImgViewerProps] = useState({
    open: false,
    src: ''
  })

  function handleCloseImgViewerProps() {
    setImgViewerProps({
      open: false,
      src: ''
    })
  }

  return (
    <div className="w-full p-2 rounded-md overflow-hidden"
      style={{
        backgroundImage: "url(/imgbg.png)"
      }}
    >
      <Swiper
        modules={[EffectCards]}
        effect="cards"
        slidesPerView={1}
        className="w-[90%] m-auto"
      >
        {
          images.map((image, i) => (
            <SwiperSlide key={i}>
              <img
                src={`/proyects/${path}/${image}`}
                alt="asd"
                className="rounded-md"
                onClick={() => setImgViewerProps({
                  src: `/proyects/${path}/${image}`,
                  open: true
                })}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <ImgViewer
        img={imgViewerProps.src}
        opened={imgViewerProps.open}
        onClose={handleCloseImgViewerProps}
      />
    </div>
  )
}