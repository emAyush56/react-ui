import "./style.css";
import { useEffect, useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const dropdownOptionsRaw = [
  { id: 1, title: "Swipe right if..." },
  { id: 2, title: "A non-negotiable..." },
  { id: 3, title: "The quickest to get into my heart..." },
  { id: 4, title: "If I had Doraemon..." },
  { id: 5, title: "A fun fact I'm obsessed with..." },
  { id: 6, title: "Favorite quality in a person..." },
  { id: 7, title: "I am a real nerd about..." },
  { id: 8, title: "If I could have a superpower..." },
  { id: 9, title: "We will get along if..." },
];

function CustomDropdown() {
  const dropdownRef = useRef(null);

  const [selectedTitle, setSelectedTitle] = useState("Select a title...");

  const [dropdownOptions, setDropdownOptions] = useState(dropdownOptionsRaw);
  const [dropdownSelected, setDropdownSelected] = useState(false);

  const handleOptionClick = (e) => {
    const clickedTitle = e.target.innerText;
    setSelectedTitle(clickedTitle);
    setDropdownSelected(false);
  };

  useEffect(() => {
    const filteredOptions = dropdownOptionsRaw.filter(
      (option) => option.title !== selectedTitle
    );
    setDropdownOptions(filteredOptions);
  }, [selectedTitle]);

  const isTitleSelected = () => {
    return selectedTitle === "Select a title...";
  };

  const handleOutsideClick = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setDropdownSelected(false);
    }
  };

  useEffect(() => {
    if (dropdownSelected) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdownSelected, handleOutsideClick]);

  return (
    <div className="custom-dropdown-wrapper flex h-screen flex-col items-center justify-center gap-10 text-gray-800">
      <div
        ref={dropdownRef}
        className="option custom-dropdown relative w-[22rem]"
      >
        <div
          onClick={() => setDropdownSelected((prev) => !prev)}
          className="title flex w-full cursor-pointer items-center justify-between rounded-full border border-gray-200 px-4 py-1.5 text-gray-400"
        >
          <span
            className={`tracking font-semibold ${
              !isTitleSelected() ? "text-gray-700" : ""
            }`}
          >
            {selectedTitle}
          </span>
          <ChevronDownIcon
            className={`h-5 w-5 stroke-current transition-all ${
              dropdownSelected ? "rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`options top absolute mt-1 max-h-40 w-full overflow-y-scroll rounded-3xl border border-gray-200 bg-white px-4 py-1.5 shadow-xl transition-opacity ${
            dropdownSelected ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {dropdownOptions.map((option) => (
            <div
              onClick={(e) => handleOptionClick(e)}
              className={`cursor-pointer py-[5px] text-sm hover:font-semibold hover:text-gray-700 ${
                selectedTitle === option.title
                  ? "font-semibold text-gray-700"
                  : ""
              }`}
              key={option.id}
            >
              {option.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomDropdown;
