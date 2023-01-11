import Question from "./Question"
import { questions } from "../data/questions"
import { useState } from "react"
import Secret from "./Secret"
import Answer from "./Answer"

const Test = () => {
  const [current, setCurrent] = useState(0)
  const [calculating, setCalculating] = useState(false)
  const [secret, setSecret] = useState(false)

  const handleSelect = (choice) => {
    if (current >= questions.length - 1) {
      setCalculating(true)
      if (choice === 'Love Live') {
        setSecret(true)
      }
    }
    setCurrent(prevState => prevState + 1)
  }

  return (
    <div className="bg-white p-4 rounded-xl h-[800px] max-h-full w-[400px] max-w-full text-center flex flex-col">
      <p className="text-neutral-500 font-thin text-sm mb-4 flex-shrink-0">
        { calculating ? 'Calculando...' : `Pregunta ${ current + 1 } de ${ questions.length }`}
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
        (calculating && !secret) && (
          <div className="flex-grow min-h-0">
            <Answer />
          </div>
        )
      }
      { secret && (
        <Secret />
      ) }
    </div>
  )
}

export default Test