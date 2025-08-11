import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

const Accordion = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false)
    

    return (
        <div className="pb-[6px] md:py-2 border-b border-[#7e7e7e] dm-sans mb-4 md:mb-9">
            <button 
                className={`flex w-full justify-between cursor-pointer text-left font-bold md:font-medium text-sm md:text-2xl text-[#4F4F4F] ${isOpen ? 'pb-5 md:pb-9' : 'pb-0'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4>{question}</h4>
                {isOpen ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} size='xl'/>}
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#4F4F4F] ${isOpen ? 'grid-rows[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden pb-5 md:pb-9 text-sm md:text-[1.125rem]'>
                    {answer}
                </div>
            </div>
        </div>
    )
}

export default Accordion