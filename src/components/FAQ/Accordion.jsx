import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false)
    

    return (
        <div className="py-2 border-b border-[#7e7e7e] dm-sans mb-9">
            <button 
                className={`flex w-full justify-between cursor-pointer font-medium text-2xl ${isOpen ? 'pb-9' : 'pb-0'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4>{question}</h4>
                {isOpen ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden pb-9 text-[1.125rem]'>
                    {answer}
                </div>
            </div>
        </div>
    )
}

export default Accordion