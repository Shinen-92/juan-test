const Question = ({ question, onSelect }) => {
  return (
    <div className="h-full flex flex-col">
      <p className="text-3xl font-bold flex-shrink-0">{ question.question }</p>
      <ul className="flex-grow flex flex-col justify-evenly">
        { question.choices.map(choice => (
          <li key={choice} className="w-full">
            <button 
              className="border-1 border rounded-xl shadow py-4 cursor-pointer w-full"
              type="button"
              onClick={() => onSelect(choice)}
            >{choice}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question