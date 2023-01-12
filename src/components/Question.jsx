const Question = ({ question, onSelect }) => {
  return (
    <div className="h-full flex flex-col">
      <p className="text-3xl font-bold flex-shrink-0 mb-8">{ question.question }</p>
      <ul className="flex-grow flex flex-col gap-3">
        { question.choices.map(choice => (
          <li key={choice} className="w-full">
            <button 
              className="border border-rose-700 rounded-xl shadow shadow-rose-600 py-4 cursor-pointer w-full font-medium text-lg bg-rose-700 text-white"
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