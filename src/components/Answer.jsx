import { juanes, juanImages } from "../data/juanes"

const Answer = () => {
  const juan = juanes[Math.floor(Math.random() * juanes.length)]

  const handleClick = () => {}

  return (
    <div className="h-full flex flex-col gap-4 ">
      <h2 className="font-bold text-4xl flex-shrink-0 ">{ juan.name }</h2>
      <img
        className="w-full flex-shrink-0 "
        src={juanImages(`./${juan.image}`)}
        alt={juan.name}
      />
      <p
        className="flex-grow overflow-auto bg-neutral-200 p-2 rounded"
      >{ juan.description }</p>
      <button
        className="flex-shrink-0 bg-rose-900 text-white py-2 rounded-lg"
        type="button"
        onClick={handleClick}
      >Compartir</button>
    </div>
  )
}

export default Answer