import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/effect-cards'
import ImgViewer from "./ImgViewer"
import { useState } from "react"
import { BsArrowLeft, BsArrowLeftCircle, BsArrowRight, BsArrowRightCircle, BsThreeDots } from "react-icons/bs"
import { PiHandGrabbingFill } from "react-icons/pi"

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
        className="w-[90%] m-auto max-h-[26rem]"
      >
        {
          images.map((image, i) => (
            <SwiperSlide key={i}>
              <img
                src={`/proyects/${path}/${image}`}
                alt={image}
                className="rounded-md cursor-grab"
                onClick={() => setImgViewerProps({
                  src: `/proyects/${path}/${image}`,
                  open: true
                })}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className="py-2 flex justify-center gap-2 text-4xl relative z-10 bg-black/50 rounded-full w-fit px-4 m-auto">
        <BsArrowLeft className="animate-pulse" />
        <BsThreeDots />
        <BsThreeDots />
        <BsArrowRight className="animate-pulse" />
        <PiHandGrabbingFill className="absolute -translate-x-[40%] opacity-90 text-3xl text-custom animate-bounce-horizontal" />
      </div>

      <ImgViewer
        img={imgViewerProps.src}
        opened={imgViewerProps.open}
        onClose={handleCloseImgViewerProps}
      />
    </div>
  )
}