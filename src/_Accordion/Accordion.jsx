import { useState } from "react";
import "./Accordion.css";

function Accordion() {
  const data = [
    {
      title: "My Profile Prompts",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. officia, vitae.",
    },

    {
      title: "About Me",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. officia, vitae.",
    },

    {
      title: "My Work & Education",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. officia, vitae.",
    },

    {
      title: "My Basics",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. officia, vitae.",
    },
  ];

  const [accordionItemSelected, setAccordionItemSelected] = useState(null);

  const accordionToggle = (idx) => {
    if (accordionItemSelected === idx) return setAccordionItemSelected(null);
    setAccordionItemSelected(idx);
  };

  return (
    <div className="mx-auto flex h-screen max-w-5xl items-center justify-center border-x p-4 ">
      <div className="accordion w-[440px] space-y-3">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="accordion-item group w-full cursor-pointer rounded-3xl bg-gray-50/40 px-4 py-6 transition-all hover:bg-gray-50"
            >
              <div
                onClick={() => accordionToggle(idx)}
                className="accordion-heading flex items-center"
              >
                <h4 className="text-lg font-medium text-gray-800">
                  {item.title}
                </h4>
                <div className="icon ml-auto">
                  {accordionItemSelected === idx ? (
                    <ChevronUp className="h-5 w-5 stroke-2 text-gray-800" />
                  ) : (
                    <ChevronDown className="h-5 w-5 stroke-2 text-gray-800" />
                  )}
                </div>
              </div>
              <div
                className={
                  accordionItemSelected === idx
                    ? `accordion-content show`
                    : `accordion-content`
                }
              >
                {item.content}
              </div>
            </div>
          );
        })}
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
