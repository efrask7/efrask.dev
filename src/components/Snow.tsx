import { lazy, Suspense } from "react";
const Snowfall = lazy(() => import('react-snowfall'))

export default function Snow() {

  const star1 = document.createElement('img')
  star1.src = '/star.png'

  const star2 = document.createElement('img')
  star2.src = '/star2.png'

  return (
    <Suspense fallback={null}>
      <Snowfall
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1
        }}
        changeFrequency={0.05}
        speed={[0.2, 0.6]}
        wind={[0.5, 1.2]}
        opacity={[0.1, 0.5]}
        color="pink"
        images={[star1, star2]}
        radius={[1, 16]}
      />
    </Suspense>
  )
}