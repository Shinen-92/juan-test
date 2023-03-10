import Question from "./Question"
import { useRef, useState, } from "react"
import { questions } from "../data/questions"
import Answer from "./Answer"
import { juanImages } from "../data/juanes"
import guayando from '../assets/audios/guayando.mp3'
import augh from '../assets/audios/augh.mp3'

const Test = () => {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)
  const [calculating, setCalculating] = useState(false)
  const [invert, setInvert] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleSelect = (choice) => {
    if (current >= questions.length - 1) {
      setCalculating(true)
      window.setTimeout(() => {
        setShowAnswer(true)
      }, 1000)
      if (choice === 'Love Live') {
        const audios = ref.current.querySelectorAll('audio')
        audios[0].volume = 1
        audios[1].volume = 1
        audios[0].play()
        audios[1].play()
        document.body.requestFullscreen()
        ref.current.classList.remove('hidden')

        window.setInterval(() => {
          setInvert(prevState => !prevState)
        }, 50)
      }
    }
    setCurrent(prevState => prevState + 1)
  }

  return (
    <div className="bg-white p-4 rounded-xl max-h-full w-[400px] max-w-[90%] text-center flex flex-col">
      <p className="text-neutral-500 font-thin text-sm mb-4 flex-shrink-0">
        { showAnswer ? 'Eres...' : calculating ? 'Calculando...' : `Pregunta ${ current + 1 } de ${ questions.length }`}
      </p>
      { calculating ? null : questions.map((question, index) => (
        <div
          key={question.question}
          className={`flex-grow w-full ${current === index ? '' : 'hidden'}`}
        >
          <Question
            question={question}
            onSelect={handleSelect}
          />
        </div>
      ))}
      {
        (calculating && !showAnswer) && (
          <div className="flex-grow flex items-center justify-center h-40">
            <div className="animate-spin text-2xl font-bold">Cargando</div>
          </div>
        )
      }
      {
        showAnswer && (
          <div className="flex-grow min-h-0">
            <Answer />
          </div>
        )
      }
      <div
        ref={ref}
        className="fixed inset-0 z-20 hidden"
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(${juanImages('./juankiller.png')})`,
          filter: `invert(${invert ? 1 : 0})`
        }}
      >
        <audio src={guayando} loop></audio>
        <audio src={augh} loop></audio>
      </div>
    </div>
  )
}

export default Test