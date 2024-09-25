import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Add_button = () => {
  return (
    <div className="rounded-full w-[50px] h-[50px] bg-slate-700 text-white flex items-center justify-center">
        <Link to="/add_notes" className="text-2xl"><FaPlus/></Link>
    </div>
  )
}

export default Add_button
