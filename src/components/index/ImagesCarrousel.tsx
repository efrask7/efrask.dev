import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/effect-cards'

interface IImagesCarrouselProps {
  path: string
  images: string[]
}

export default function ImagesCarrousel({ path, images }: IImagesCarrouselProps) {
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
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}