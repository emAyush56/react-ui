import { useState } from "react";
import ModalPopUp from "../Modal/ModalPopUp";

function MultiStepQuiz() {
  const allQuestions = [
    {
      id: 1,
      name: "height",
      title: "what is your height?",
      options: ["skip", "yup, that's how tall I am"],
      value: "",
    },
    {
      id: 2,
      name: "exercise",
      title: "Do you work out?",
      options: ["skip", "active", "sometimes", "almost never"],
      value: "",
    },
    {
      id: 3,
      name: "education level",
      title: "What is your education?",
      options: [
        "skip",
        "high school",
        "in college",
        "undergraduate degree",
        "postgraduate degree",
      ],
      value: "",
    },
    {
      id: 4,
      name: "drinking",
      title: "Do you drink?",
      options: ["skip", "frequently", "socially", "rarely", "never", "sober"],
      value: "",
    },
    {
      id: 5,
      name: "smoking",
      title: "Do you smoke?",
      options: ["skip", "socially", "never", "regularly"],
      value: "",
    },
    {
      id: 6,
      name: "looking for",
      title: "What do you want from dates?",
      options: ["skip", "relationship", "something casual", "don't know yet"],
      value: "",
    },
  ];
  return (
    <div className="wrapper flex h-screen items-center justify-center">
      <div className="items w-96 space-y-3 rounded-3xl bg-gray-50 px-4 py-6">
        {allQuestions.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function Item({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="item-wrapper">
      <div
        onClick={() => setIsModalOpen(true)}
        className="item flex w-full cursor-pointer items-center justify-between rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium tracking-wide text-gray-700 transition-all hover:bg-transparent"
      >
        <span className="block">
          {item.name[0].toUpperCase() + item.name.slice(1)}
        </span>
        <span className="block text-xl text-gray-400">+</span>
      </div>
      <ModalPopUp isOpen={isModalOpen} onClose={() => setIsModalOpen()}>
        <div className="w-96 p-4 text-center">
          <h1 className="text-xl font-semibold tracking-wide text-gray-800">
            {item.title[0].toUpperCase() + item.title.slice(1)}
          </h1>
          <div className="options mt-8 space-y-3">
            {item.options.map((option, id) => (
              <button
                className={`block w-full rounded-full border border-gray-400 px-4 py-2 text-gray-700 transition-all hover:bg-gray-800 hover:text-white ${
                  option === "skip" &&
                  "border-gray-200/90 font-semibold text-gray-400/90"
                }`}
                key={id}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </ModalPopUp>
    </div>
  );
}

export default MultiStepQuiz;
