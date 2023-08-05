import { useState } from "react";

function DynamicElement() {
  const [promptTitle, setPromptTitle] = useState("");
  const [promptBody, setPromptBody] = useState("");
  const [prompts, setPrompts] = useState([
    {
      title: "something about you",
      body: "I am a frontend focused full stack js enginner",
    },
  ]);

  const handleSubmit = () => {
    console.log(promptTitle);
    console.log(promptBody);

    // on clicking the save button
    // first push the data into an array of objects to mimic a POST req - to do that first save the new object
    const newPrompt = {
      title: promptTitle,
      body: promptBody,
    };
    // then update the prompts state
    setPrompts((prev) => [...prev, newPrompt]);
    setPromptTitle("");
    setPromptBody("");
  };
  return (
    <div className="flex h-screen items-center justify-center gap-10">
      <div className="inputs">
        <div>
          <input
            value={promptTitle}
            onChange={(e) => setPromptTitle(e.target.value)}
            type="text"
            placeholder="Prompt Title"
            className="w-full rounded-md border border-gray-600 px-3 py-1 outline-none"
          />
        </div>
        <div className="mt-2">
          <textarea
            value={promptBody}
            onChange={(e) => setPromptBody(e.target.value)}
            placeholder="Write something"
            className="w-full rounded-md border border-gray-600 px-3 py-1 outline-none"
          ></textarea>
        </div>
        <button
          className="rounded-md bg-gray-300 px-3 py-0.5"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>

      <div className="list">
        <h3 className="mb-4 text-xl font-semibold">All Items</h3>
        {prompts.map((item) => {
          return (
            <Prompt key={item.title} title={item.title} body={item.body} />
          );
        })}
      </div>
    </div>
  );
}

function Prompt({ title, body }) {
  return (
    <div className="prompt">
      <h3 className="mb-2 text-lg font-bold text-gray-500">{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default DynamicElement;
