import { useState} from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option)
  };
  const renderedOptions = options.map(option => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}<GoChevronDown className="text-lg" />
      </div>
    )
  })

  return (
    <div className="w-48 relative">
      <Panel
        className="field justify-between items-center cursor-pointer"
        onClick={handleClick}>{value?.label || "Select..."}
      </Panel>
      {
        isOpen &&
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>}
    </div>)
}

export default DropDown;