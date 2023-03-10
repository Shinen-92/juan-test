import { useMemo } from "react"
import { juanes, juanImages } from "../data/juanes"
import camisa from '../assets/audios/camisa.mp3'
import rata from '../assets/audios/rata.mp3'

const Answer = () => {
  const juan = useMemo(() => juanes[Math.floor(Math.random() * juanes.length)], [])

  return (
    <div className="h-full flex flex-col gap-4 ">
      { juan.name === 'Juanes' && <audio src={camisa} autoPlay loop /> }
      { juan.name === 'Rata con Huevos' && <audio src={rata} autoPlay loop /> }
      <h2 className="font-bold text-4xl flex-shrink-0 ">{ juan.name }</h2>
      <img
        className="w-full flex-shrink-0 max-h-[300px]"
        src={juanImages(`./${juan.image}`)}
        alt={juan.name}
      />
      <textarea
        className="flex-grow overflow-auto bg-neutral-100 p-2 rounded resize-none text-center text-neutral-900 font-normal"
        rows="10"
        value={juan.description}
      ></textarea>
    </div>
  )
}

export default Answer