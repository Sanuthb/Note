import { Link, useParams } from "react-router-dom";
import fetch_data_byid from "../Hooks/Fetch_data_byID";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import save_edit_data from "../Hooks/Save_edit_data";

const Edit_note = () => {
  const [editnotetitle, seteditnotetitle] = useState("");
  const [editnotedesc, seteditnotedesc] = useState("");

  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<{ title: string; description: string } | null>(null);

  useEffect(() => {
    if (id) {
      const fetchedNote = fetch_data_byid(id);
      setNote(fetchedNote);
    }
  }, [id]);

  useEffect(() => {
    if (note) {
      seteditnotetitle(note.title);
      seteditnotedesc(note.description);
    }
  }, [note]);

  function savechanges(){
    save_edit_data(note,editnotetitle,editnotedesc,id)
  }

  return (
    <div className="bg-slate-900 h-[100vh] w-[100%] text-gray-50">
      <div className="p-5 flex justify-between items-center">
        <div className="bg-slate-700 w-[30px] h-[30px] rounded-lg flex items-center justify-center">
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </div>
        <button
          onClick={savechanges}
          className="bg-lime-600 w-[30px] h-[30px] rounded-lg flex items-center justify-center"
        >
          <IoIosSave />
        </button>
      </div>
      {note ? (
        <form className="p-5">
          <div className="mb-4">
            <input
              className="bg-transparent text-3xl focus:outline-none placeholder-slate-500"
              type="text"
              placeholder="Title"
              value={editnotetitle}
              onChange={(e) => {
                seteditnotetitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-4 mt-6">
            <textarea
              id="note-content"
              className="bg-transparent text-lg w-full focus:outline-none placeholder-slate-500"
              placeholder="Write your note here..."
              name="content"
              cols={30}
              rows={10}
              value={editnotedesc}
              onChange={(e) => {
                seteditnotedesc(e.target.value);
              }}
            ></textarea>
          </div>
        </form>
      ) : (
        <p>No note found.</p>
      )}
    </div>
  );
};

export default Edit_note;
