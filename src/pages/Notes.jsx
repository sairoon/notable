import { formatDistance } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../features/NoteSlice";
import { toast, ToastContainer } from "react-toastify";
import UpdateModal from "../components/UpdateModal";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const Notes = () => {
  const initialLoad = 8;
  const [more, setMore] = useState(initialLoad);
  const [modal, setModal] = useState(false);
  const [editName, setEditName] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editId, setEditId] = useState();
  const { notes } = useSelector((state) => state.note);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    toast.error("Note Deleted Successfully", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
    });
    dispatch(deleteNote(id));
  };

  const handleMore = () => {
    setMore((prev) => prev + 4);
  };
  const handleEdit = (note) => {
    setModal(true);
    setEditName(note.name);
    setEditTitle(note.title);
    setEditDescription(note.description);
    setEditId(note.id);
  };
  if (modal) {
    return (
      <UpdateModal
        setModal={setModal}
        editName={editName}
        editTitle={editTitle}
        editDescription={editDescription}
        editId={editId}
        setEditName={setEditName}
        setEditTitle={setEditTitle}
        setEditDescription={setEditDescription}
      />
    );
  }

  return (
    <>
      <Helmet>
        <title>Notable | Notes</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full min-h-screen py-16 dark:bg-[#181a1b] dark:text-[#b0aa9f] ">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-500 dark:text-[#b0aa9f] mt-4">
              All Notes
            </h1>
            <hr className="my-4 dark:border-[#b0aa9f]" />
          </div>

          <div className="grid grid-cols-4 gap-4 ">
            {notes?.slice(0, more).map((note) => (
              <div
                className="border dark:border-[#363b3d] shadow bg-gray-100 dark:bg-[#1e2022] text-slate-900 rounded-lg px-4 py-3 hover:shadow-xl dark:hover:shadow-lg transition hover:translate-y-1 ease-out delay-150"
                key={note.id}
              >
                <div className="group relative ">
                  <h3 className="inline-flex rounded-md text-xl font-mono font-bold text-slate-600 dark:text-[#b0aa9f]">
                    {note.title}
                  </h3>
                  <div className="absolute bottom-full left-[15%] -translate-x-1/2 whitespace-nowrap rounded bg-slate-700 py-1 px-3 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all ease-out duration-150 delay-100 select-none">
                    <span className="absolute bottom-[-4px] left-[15%] h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-slate-700"></span>
                    Project Title
                  </div>
                </div>
                <div className="group relative ">
                  <p className="inline-flex rounded-md text-sm font-sans font-normal text-slate-600 dark:text-[#b0aa9f]">
                    {note.description}
                  </p>
                  <div className="absolute bottom-full left-[80%] -translate-x-1/2 whitespace-nowrap rounded bg-slate-700 py-1 px-3 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all ease-out duration-150 delay-100 select-none">
                    <span className="absolute bottom-[-3px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-slate-700"></span>
                    Project Description
                  </div>
                </div>
                <div className="group relative inline-block">
                  <p className="inline-flex rounded-md text-sm font-serif italic my-2 text-slate-600 dark:text-[#b0aa9f]">
                    - {note.name}
                  </p>
                  <div className="absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap rounded bg-slate-700 py-1 px-3 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all ease-out duration-150 delay-100 select-none">
                    <span className="absolute left-[-3px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-slate-700"></span>
                    Name
                  </div>
                </div>
                <br />
                <span className="text-sm font-mono font-normal text-gray-500 select-none dark:text-[#b0aa9f]">
                  {formatDistance(note.createAt, new Date(), {
                    addSuffix: true,
                  })}
                </span>
                <div className="mt-2 flex justify-end">
                  <div className="relative group">
                    <button
                      className="border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900 hover:font-normal px-2 py-2 rounded-md transition-all ease-linear duration-150 active:scale-90"
                      onClick={() => handleEdit(note)}
                    >
                      <FaRegEdit />
                    </button>
                    <div className="absolute right-full top-1/2 me-2 -translate-y-1/2 whitespace-nowrap rounded bg-slate-700 py-1 px-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all ease-out duration-150 delay-100 select-none">
                      <span className="absolute right-[-3px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm bg-slate-700"></span>
                      Edit
                    </div>
                  </div>
                  <div className="relative group">
                    <button
                      className="border-2 border-red-600 bg-red-600 text-white px-2 py-2 rounded-md ms-2 hover:bg-red-500 transition duration-150 ease-linear active:scale-90"
                      onClick={() => handleDelete(note.id)}
                    >
                      <FaRegTrashCan />
                    </button>
                    <div className="absolute bottom-[115%] left-1/3 -translate-x-1/2 whitespace-nowrap rounded bg-slate-700 py-1 px-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-all ease-out duration-150 delay-100 select-none">
                      <span className="absolute bottom-[-3px] left-3/4 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-slate-700"></span>
                      Delete
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {more < notes.length && (
            <div className="text-center mt-5">
              <button
                className="dark:bg-indigo-600 bg-emerald-500 font-semibold text-white px-6 py-2 rounded-lg hover:bg-emerald-600 dark:hover:bg-indigo-700 hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition ease-out active:scale-90"
                onClick={handleMore}
              >
                More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Notes;
