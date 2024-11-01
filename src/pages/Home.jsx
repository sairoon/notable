import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/NoteSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const maxCharacters = 100;

  const dispatch = useDispatch();

  const handelSaveNotes = (e) => {
    e.preventDefault();
    if (!name) {
      toast.error("Please fill the Name field", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    }
    if (!title) {
      toast.error("Please add a Title", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    }
    if (!description) {
      toast.error("Please write a Description", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
      return;
    } else {
      const newNotes = {
        id: Date.now().toString(32),
        name,
        title,
        description,
        createAt: new Date().toString(),
      };
      setName("");
      setTitle("");
      setDescription("");
      dispatch(addNote(newNotes));

      toast.success("Note Added Successfully", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
      });
    }
  };
  const handleDescription = (e) => {
    if (e.target.value.length <= maxCharacters) {
      setDescription(e.target.value);
    }
  };
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <Helmet>
        <title>Notable | Home</title>
      </Helmet>
      <ToastContainer />
        <div className="w-full h-screen flex justify-center items-center dark:bg-[#181a1b]">
          <div className="w-1/3 bg-slate-50 dark:bg-[#1e2022] dark:border dark:border-[#363b3d] shadow-xl dark:shadow-lg text-slate-600 rounded-md py-3 px-4 box-border">
            <div>
              <h1 className="text-3xl font-bold text-center dark:text-[#b0aa9f]">
                Create Note
              </h1>
            </div>
            <hr className="my-2" />
            <div className="relative">
              <label
                htmlFor=""
                className="text-xs bg-white dark:bg-[#181a1b] dark:text-[#b0a99f] px-1 absolute top-[1px] left-3 rounded-md border-t dark:border-[#363b3d] text-slate-400 font-medium select-none"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter a name"
                className="w-full rounded-md bg-white border dark:placeholder:text-[#64625d] dark:text-[#b0a99f] dark:border-[#363b3d] transition ease-in delay-100 my-2 px-3 py-3 outline-none focus:shadow-lg dark:bg-[#181a1b]"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="relative">
              <label
                htmlFor=""
                className="text-xs bg-white dark:bg-[#181a1b] dark:text-[#b0a99f] dark:border-[#363b3d] px-1 absolute top-[1px] left-3 rounded-md border-t text-slate-400 font-medium select-none"
              >
                Title
              </label>
              <input
                type="text"
                placeholder="Add a title"
                className="w-full rounded-md bg-white border dark:placeholder:text-[#64625d] dark:text-[#b0a99f] dark:border-[#363b3d] dark:bg-[#181a1b] transition ease-in delay-100 my-2 px-3 py-3 outline-none focus:shadow-lg"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="relative">
              <label
                htmlFor=""
                className="text-xs bg-white dark:bg-[#181a1b] dark:text-[#b0a99f] dark:border-[#363b3d] px-1 absolute top-[1px] left-3 rounded-md border-t text-slate-400 font-medium select-none"
              >
                Description
              </label>
              <textarea
                rows={4}
                type="text"
                maxLength={maxCharacters}
                placeholder="write something..."
                className="w-full rounded-md bg-white dark:placeholder:text-[#64625d] dark:text-[#b0a99f] dark:border-[#363b3d] dark:bg-[#181a1b] border transition ease-in delay-100 my-2 px-3 py-3 resize-none outline-none focus:shadow-lg"
                onChange={handleDescription}
                value={description}
              />
            </div>

            <div className="w-full flex items-center mb-2 font-light">
              <input
                type="checkbox"
                className="cursor-pointer "
                id="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="checkbox"
                className="ms-2 cursor-pointer select-none dark:text-[#b0a99f]"
              >
                I want to add this note
              </label>
              <p className="ms-auto select-none dark:text-[#b0a99f]">
                {maxCharacters - description.length} characters remaining
              </p>
            </div>
            <div className="w-full flex justify-center">
              <button
                onClick={handelSaveNotes}
                className="w-[95%] rounded-lg text-lg font-semibold bg-green-600 dark:bg-emerald-700 dark:hover:bg-emerald-800 hover:bg-green-700 transition ease-in delay-25 hover:scale-105 my-2 px-3 py-2 text-white active:scale-100 disabled:bg-gray-500 dark:disabled:bg-gray-600 disabled:scale-100 disabled:cursor-not-allowed select-none"
                disabled={!isChecked}
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default Home;
