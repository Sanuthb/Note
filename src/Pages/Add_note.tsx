import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Date_comp from "../Comp/Date_comp";
import { useState } from "react";
import add_data_localstorage from "../Hooks/Add_data_localstorage";
import dateandtime from "../Hooks/Dateandtime";

const Add_note = () => {
  const [notetitle, setnotetitle] = useState("");
  const [notedesc, setnotedesc] = useState("");

  const {currentdate,time} = dateandtime()

  const note_data = {
    title: notetitle,
    description: notedesc,
    date: currentdate,
    time:time
  };
  const navigate = useNavigate()
  function adddatatostorage() {
    add_data_localstorage(note_data);
    window.alert("Note Added") 
    navigate("/")    
  }

  return (
    <div className="bg-slate-900 h-[100vh] w-[100%] text-gray-50 relative">
      <div className="p-5 flex justify-between items-center">
        <div className=" bg-slate-700 w-[30px] h-[30px] rounded-lg flex items-center justify-center">
          <Link to="/">
            <FaArrowLeft />
          </Link>
        </div>
        <button
          className=" bg-slate-700 w-[30px] h-[30px] rounded-lg flex items-center justify-center"
          onClick={adddatatostorage}
        >
          <MdOutlineDone />
        </button>
      </div>

      <div className="p-5">
        <form>
          <div className="mb-4">
            <input
              className="bg-transparent text-3xl focus:outline-none placeholder-slate-500"
              type="text"
              placeholder="Title"
              value={notetitle}
              onChange={(e) => {
                setnotetitle(e.target.value);
              }}
            />
          </div>
          <div>
            <Date_comp />
          </div>
          <div className="mb-4 mt-6">
            <textarea
              id="note-content"
              className="bg-transparent text-lg w-full focus:outline-none placeholder-slate-500"
              placeholder="Write your note here..."
              name="content"
              cols={30}
              rows={10}
              value={notedesc}
              onChange={(e) => {
                setnotedesc(e.target.value);
              }}
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_note;
