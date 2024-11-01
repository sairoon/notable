import React, { useState } from "react";
import { GiCrossedSabres } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { updateNote } from "../features/NoteSlice";
import { toast, ToastContainer } from "react-toastify";

const UpdateModal = ({
  setModal,
  editName,
  editTitle,
  editDescription,
  editId,
  setEditName,
  setEditTitle,
  setEditDescription,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const maxCharacters = 100;

  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (!editName) {
      toast.error("Name shouldn't be empty", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    }
    if (!editTitle) {
      toast.error("Title shouldn't be empty", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    }
    if (!editDescription) {
      toast.error("Description shouldn't be empty", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    }
    const updateValues = {
      id: editId,
      name: editName,
      title: editTitle,
      description: editDescription,
      createAt: new Date().toString(),
    };
    dispatch(updateNote(updateValues));
    toast.success("Note Updated Successfully", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });
    setTimeout(() => {
      setModal(false);
    }, 4000);
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleEditDescription = (e) => {
    if (e.target.value.length <= maxCharacters) {
      setEditDescription(e.target.value);
    }
  };
  return (
    <>
      <ToastContainer />
        <div className="w-full h-screen bg-black/20 dark:bg-black/90 fixed top-8 left-0 border dark:border-[#363b3d] flex justify-center items-center">
          <div className="w-1/3 bg-slate-50 dark:bg-[#1b1d1e] border dark:border-[#363b3d] shadow-xl text-slate-600 rounded-md py-3 px-4 box-border">
            <div className="relative">
              <h1 className="text-3xl font-bold text-center dark:text-[#b0aa9f]">
                Edit Note
              </h1>
              <div
                className="absolute top-1 right-3 w-8 h-8 rounded-full bg-slate-200 dark:bg-[#242729] dark:text-[#b0aa9f] dark:hover:bg-[#2f3335] hover:bg-slate-300 transition ease-out active:scale-90 cursor-pointer flex justify-center items-center"
                onClick={() => setModal(false)}
              >
                <GiCrossedSabres />
              </div>
            </div>
            <hr className="my-2" />
            <div className="relative">
              <label className="text-xs bg-white dark:bg-[#181a1b] dark:text-[#b0a99f] dark:border-[#363b3d] px-1 absolute top-[1px] left-3 rounded-md border-t text-slate-400 font-medium select-none">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-md bg-white dark:placeholder:text-[#64625d] dark:text-[#b0a99f] dark:border-[#363b3d] dark:bg-[#181a1b] border transition ease-in delay-100 my-2 px-3 py-3 outline-none focus:shadow-lg"
                onChange={(e) => setEditName(e.target.value)}
                value={editName}
              />
            </div>
            <div className="relative">
              <label className="text-xs bg-white dark:bg-[#181a1b] dark:text-[#b0a99f] dark:border-[#363b3d] px-1 absolute top-[1px] left-3 rounded-md border-t text-slate-400 font-medium select-none">
                Title
              </label>
              <input
                type="text"
                className="w-full rounded-md bg-white dark:placeholder:text-[#64625d] dark:text-[#b0a99f] dark:border-[#363b3d] dark:bg-[#181a1b] border transition ease-in delay-100 my-2 px-3 py-3 outline-none focus:shadow-lg"
                onChange={(e) => setEditTitle(e.target.value)}
                value={editTitle}
              />
            </div>
            <div className="relative">
              <label className="text-xs bg-white dark:bg-[#181a1b] dark:text-[#b0a99f] dark:border-[#363b3d] px-1 absolute top-[1px] left-3 rounded-md border-t text-slate-400 font-medium select-none">
                Description
              </label>
              <textarea
                rows={4}
                type="text"
                maxLength={maxCharacters}
                className="w-full rounded-md bg-white dark:placeholder:text-[#64625d] dark:text-[#b0a99f] dark:border-[#363b3d] dark:bg-[#181a1b] border transition ease-in delay-100 my-2 px-3 py-3 resize-none outline-none focus:shadow-lg"
                onChange={handleEditDescription}
                value={editDescription}
              />
            </div>
            <div className="w-full flex items-center mb-2 font-light">
              <input
                type="checkbox"
                className="cursor-pointer "
                id="checkbox"
                checked={isChecked}
                onChange={handleCheckbox}
              />
              <label
                htmlFor="checkbox"
                className="ms-2 cursor-pointer select-none dark:text-[#b0a99f]"
              >
                I want to update this note
              </label>
              <p className="ms-auto select-none dark:text-[#b0a99f]">
                {maxCharacters - editDescription.length} characters remaining
              </p>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={handleUpdate}
                className="w-[95%] rounded-lg text-lg font-semibold bg-teal-600 dark:bg-teal-700 hover:bg-teal-700 dark:hover:bg-teal-800 transition ease-in delay-25 hover:scale-105 my-2 px-3 py-2 text-white active:scale-100 disabled:bg-gray-500 dark:disabled:bg-gray-600 disabled:scale-100 disabled:cursor-not-allowed select-none"
                disabled={!isChecked}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default UpdateModal;
