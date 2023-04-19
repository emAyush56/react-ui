import { useState } from "react";
function Accordion() {
  const data = [
    {
      title: "My Profile Prompts",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis quo ab corrupti animi eligendi laboriosam delectus necessitatibus natus expedita soluta, velit molestias exercitationem dolorum eveniet odio, harum recusandae minima.",
    },

    {
      title: "About Me",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis quo ab corrupti animi eligendi laboriosam delectus necessitatibus natus expedita soluta, velit molestias exercitationem dolorum eveniet odio, harum recusandae minima.",
    },

    {
      title: "My Work & Education",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis quo ab corrupti animi eligendi laboriosam delectus necessitatibus natus expedita soluta, velit molestias exercitationem dolorum eveniet odio, harum recusandae minima.",
    },

    {
      title: "My Basics",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facilis quo ab corrupti animi eligendi laboriosam delectus necessitatibus natus expedita soluta, velit molestias exercitationem dolorum eveniet odio, harum recusandae minima.",
    },
  ];

  const [itemSelected, setItemSelected] = useState(null);

  return (
    <div className="flex h-screen items-center justify-center text-gray-800">
      <div className="accordion w-[440px] space-y-3">
        {data.map((item, idx) => {
          return (
            <AccordionItem
              itemSelected={itemSelected}
              setItemSelected={setItemSelected}
              key={idx}
              item={item}
              idx={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

function AccordionItem({ itemSelected, setItemSelected, item, idx }) {
  const itemToggler = (idx) => {
    if (itemSelected === idx) return setItemSelected(null);
    setItemSelected(idx);
  };

  return (
    <div
      onClick={() => itemToggler(idx)}
      className="accordion-item cursor-pointer rounded-3xl bg-gray-50/50 px-6 py-7 transition-all hover:bg-gray-50"
    >
      <div className="item-heading flex cursor-pointer items-center">
        <h4 className="text-lg font-medium">{item.title}</h4>
        <div className="item-heading-icon ml-auto">
          {/* {itemSelected === idx ? (
            <ChevronUp className="h-5 w-5 stroke-2 text-gray-800" />
          ) : (
            <ChevronDown className="h-5 w-5 stroke-2 text-gray-800" />
          )} */}
          <ChevronDown
            className={`h-5 w-5 stroke-2 text-gray-800 transition-all duration-200 ${
              itemSelected === idx ? "rotate-180" : null
            }`}
          />
        </div>
      </div>
      <div
        className={`item-content transition-all duration-200 ${
          itemSelected === idx ? "max-h-40" : "max-h-0 overflow-hidden"
        }`}
      >
        <p className="mt-3">{item.content}</p>
      </div>
    </div>
  );
}

function ChevronDown({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function ChevronUp({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 15.75l7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}

export default Accordion;
