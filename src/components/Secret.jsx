import { useLayoutEffect, } from "react"
import { juanImages } from "../data/juanes"
import joke from '../assets/audios/joke.mp3'
import augh from '../assets/audios/augh.mp3'

const Secret = () => {
  useLayoutEffect(() => {
    document.body.requestFullscreen()
  })

  return (
    <div
      className="fixed inset-0 z-20"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${juanImages('./juankiller.png')})`
      }}
    >
      <audio src={joke} autoPlay loop></audio>
      <audio src={augh} autoPlay loop></audio>
    </div>
  )
}

export default Secret