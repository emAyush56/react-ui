import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        className="flex items-center justify-center gap-2 rounded-lg bg-red-600 py-2 px-4 font-medium text-white shadow-md shadow-red-400/40 transition-all hover:bg-red-700"
        onClick={() => setIsOpen(true)}
      >
        <TrashIcon className={`h-5 w-5 stroke-2`} />
        Delete
      </button>
      <ModalPopUp isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-56 text-center">
          <TrashIcon className={`mx-auto h-12 w-12 stroke-2 text-red-500`} />
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
            <p className="mt-1 text-sm text-gray-500">
              Are you sure you want to delete this item?
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => console.log("Item deleted")}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-2 px-4 font-medium text-white shadow-md shadow-red-400/40 transition-all hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-50 py-2 px-4 font-medium text-gray-800 shadow-md shadow-gray-300/40 transition-all hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalPopUp>
    </div>
  );
}

function ModalPopUp({ isOpen, onClose, children }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-colors ${
        isOpen ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-xl bg-white p-6 shadow transition-all ${
          isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 rounded-lg p-0.5 text-gray-400 transition-all hover:bg-gray-50"
        >
          <XMarkIcon className={`h-5 w-5 stroke-2`} />
        </button>
        {children}
      </div>
    </div>
  );
}

function TrashIcon({ className }) {
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
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}

function XMarkIcon({ className }) {
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
export default Modal;
