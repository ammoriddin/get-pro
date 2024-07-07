import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ChustomCheckbox({isChecked, setIsChecked, bg}) {

    const handleClick = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div onClick={handleClick} className={`w-[20px] flex-shrink-0 h-[20px] cursor-pointer overflow-hidden ${isChecked ? `border-none ${bg}` : "bg-white border-[1px] border-solid border-secondaryGray"} rounded-md relative`}>
            <span>
                {
                    isChecked &&
                    <FontAwesomeIcon className='text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-sm' icon={faCheck} />
                }
            </span>
        </div>
    )
}