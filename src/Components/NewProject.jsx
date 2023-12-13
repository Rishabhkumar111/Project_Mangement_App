import { useRef } from "react";
import Input from "./input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd , onCancle}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredDescription === "" ||
      enteredDueDate === "" ||
      enteredTitle === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} >
        <h2>Invalid Input</h2>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end items-center gap-4 my-4">
          <li>
            <button onClick={onCancle} className="text-stone-800 hover:text-stone-950">
              Cancle
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className=" px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
