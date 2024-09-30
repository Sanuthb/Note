import { Link, useParams } from "react-router-dom";
import fetch_data_byid from "../Hooks/Fetch_data_byID";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import delete_note from "../Hooks/Delete_note";
import { useNavigate } from "react-router-dom";

const View_note = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [notetitle, setnotetitle] = useState("");
  const [notedesc, setnotedesc] = useState("");
  const [notetime, setnotetime] = useState<string | undefined>();
  const [notedate,setnotedate] = useState<string|undefined>();
  const [note, setNote] = useState<{
    title: string;
    description: string;
    time:string;
    date:string;
  } | null>();

  useEffect(() => {
    if (id) {
      const fetchedNote = fetch_data_byid(id);
      setNote(fetchedNote);
    }
  }, [id]);

  useEffect(() => {
    if (note) {
      console.log(note)
      setnotetitle(note.title);
      setnotedesc(note.description);
      setnotetime(note.time)
      setnotedate(note.date)
    }
  }, [note]);

  function deletenote () {
    delete_note(id)
    navigate("/")
  }

  return (
    <div className="bg-slate-900 h-[100vh] w-[100%] text-gray-50">
      <div className="p-5 flex justify-between items-center">
        <div className=" bg-slate-700 w-[30px] h-[30px] rounded-lg flex items-center justify-center">
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Link
            to={`/edit_notes/${id}`}
            className=" bg-red-600 w-[30px] h-[30px] rounded-lg flex items-center justify-center"
          >
            <FaPen />
          </Link>
          <button className=" bg-red-600 w-[30px] h-[30px] rounded-lg flex items-center justify-center" onClick={deletenote}>
            <MdDelete />
          </button>
        </div>
      </div>
      {note ? (
        <div className="p-5">
          <h2 className="text-3xl mb-3">{notetitle}</h2>
          <p>{notedate}{" "}{notetime}</p>
          <p className="text-xl mt-2">{notedesc}</p>
        </div>
      ) : (
        <p>No note found.</p>
      )}
    </div>
  );
};

export default View_note;
