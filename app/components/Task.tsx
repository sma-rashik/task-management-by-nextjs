"use client";
import { ITask } from "@/types";
import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";

interface TaskProps {
  task: ITask;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false);
  const [openModalDlt, setOpenModaldlt] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo = () => {};

  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setModalOpenEdit(true)}
          className="text-blue-500 cursor-pointer"
          size={25}
        />
        <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
          <form>
            <h3 className="font-bold text-lg">Add New Task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button
                onClick={handleSubmitEditTodo}
                type="button"
                className="btn"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2 className="text-red-500 cursor-pointer" size={25} />
      </td>
    </tr>
  );
};

export default Task;
